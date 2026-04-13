import { NextRequest, NextResponse } from "next/server"

type ContactPayload = {
  nombre: string
  email: string
  telefono: string
  rol: string
  organizacion?: string
  mensaje: string
}

type PartnerPayload = {
  nombreApellidos: string
  telefono: string
  email: string
  empresa?: string
  mensaje: string
}

function isNonEmptyString(value: unknown) {
  return typeof value === "string" && value.trim().length > 0
}

async function sendToGoogleAppsScript(url: string, payload: object) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error(`Google Apps Script error: ${response.status}`)
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const formType = body?.formType as "contact" | "partners" | undefined

    if (!formType) {
      return NextResponse.json({ error: "formType es obligatorio" }, { status: 400 })
    }

    if (formType === "contact") {
      const payload = body as ContactPayload & { formType: "contact" }
      if (
        !isNonEmptyString(payload.nombre) ||
        !isNonEmptyString(payload.email) ||
        !isNonEmptyString(payload.telefono) ||
        !isNonEmptyString(payload.rol) ||
        !isNonEmptyString(payload.mensaje)
      ) {
        return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 })
      }

      const endpoint = process.env.GOOGLE_SHEETS_CONTACT_WEBHOOK_URL
      if (!endpoint) {
        return NextResponse.json(
          { error: "El servicio de contacto no está configurado en este entorno." },
          { status: 500 }
        )
      }

      await sendToGoogleAppsScript(endpoint, {
        formType,
        createdAt: new Date().toISOString(),
        nombre: payload.nombre.trim(),
        email: payload.email.trim(),
        telefono: payload.telefono.trim(),
        rol: payload.rol.trim(),
        organizacion: payload.organizacion?.trim() ?? "",
        mensaje: payload.mensaje.trim(),
      })
    }

    if (formType === "partners") {
      const payload = body as PartnerPayload & { formType: "partners" }
      if (
        !isNonEmptyString(payload.nombreApellidos) ||
        !isNonEmptyString(payload.telefono) ||
        !isNonEmptyString(payload.email) ||
        !isNonEmptyString(payload.mensaje)
      ) {
        return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 })
      }

      const endpoint = process.env.GOOGLE_SHEETS_PARTNERS_WEBHOOK_URL
      if (!endpoint) {
        return NextResponse.json(
          { error: "El servicio de partners no está configurado en este entorno." },
          { status: 500 }
        )
      }

      await sendToGoogleAppsScript(endpoint, {
        formType,
        createdAt: new Date().toISOString(),
        nombreApellidos: payload.nombreApellidos.trim(),
        telefono: payload.telefono.trim(),
        email: payload.email.trim(),
        empresa: payload.empresa?.trim() ?? "",
        mensaje: payload.mensaje.trim(),
      })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Error processing form submission", error)
    return NextResponse.json({ error: "No se pudo enviar el formulario" }, { status: 500 })
  }
}
