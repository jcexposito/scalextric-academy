"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const roles = [
  { value: "profesor", label: "Profesor/a" },
  { value: "director", label: "Director/a de centro" },
  { value: "coordinador", label: "Coordinador/a STEM" },
  { value: "estudiante", label: "Estudiante" },
  { value: "familia", label: "Padre/Madre/Tutor" },
  { value: "empresa", label: "Representante de empresa" },
  { value: "otro", label: "Otro" }
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false)
  const [role, setRole] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!acceptedPrivacy) return

    setError("")
    setIsSubmitting(true)
    try {
      const formData = new FormData(e.currentTarget)
      const payload = {
        formType: "contact",
        nombre: String(formData.get("nombre") ?? ""),
        email: String(formData.get("email") ?? ""),
        telefono: String(formData.get("telefono") ?? ""),
        rol: role,
        organizacion: String(formData.get("organizacion") ?? ""),
        mensaje: String(formData.get("mensaje") ?? ""),
      }

      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      })
      const data = await response.json().catch(() => null)

      if (!response.ok) {
        throw new Error(
          typeof data?.detail === "string"
            ? `${typeof data?.error === "string" ? `${data.error}: ` : ""}${data.detail}`
            : typeof data?.error === "string"
              ? data.error
            : "No se ha podido enviar. Inténtalo de nuevo en unos minutos."
        )
      }

      setIsSubmitted(true)
      e.currentTarget.reset()
      setRole("")
      setAcceptedPrivacy(false)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "No se ha podido enviar. Inténtalo de nuevo en unos minutos."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          ¡Mensaje enviado!
        </h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Gracias por tu solicitud. Te contactaremos lo antes posible.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="nombre">Nombre completo *</Label>
          <Input id="nombre" name="nombre" placeholder="Tu nombre y apellidos" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico *</Label>
          <Input id="email" name="email" type="email" placeholder="tu@email.com" required />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="telefono">Teléfono *</Label>
          <Input id="telefono" name="telefono" type="tel" placeholder="+34 600 000 000" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="rol">Perfil *</Label>
          <Select value={role} onValueChange={setRole} required>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona tu perfil" />
            </SelectTrigger>
            <SelectContent>
              {roles.map((role) => (
                <SelectItem key={role.value} value={role.value}>
                  {role.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="organizacion">Centro u organización</Label>
        <Input id="organizacion" name="organizacion" placeholder="Nombre de tu colegio, instituto u organización" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensaje">Mensaje *</Label>
        <Textarea 
          id="mensaje" 
          name="mensaje"
          placeholder="Cuéntanos en qué podemos ayudarte..."
          rows={5}
          required
        />
      </div>

      <div className="flex items-start gap-3">
        <Checkbox 
          id="privacy" 
          checked={acceptedPrivacy}
          onCheckedChange={(checked) => setAcceptedPrivacy(checked === true)}
        />
        <Label htmlFor="privacy" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
          He leído y acepto la{" "}
          <Link href="/privacidad" className="text-[#ED1C24] hover:underline">
            Política de Privacidad
          </Link>
          {" "}y consiento el tratamiento de mis datos. *
        </Label>
      </div>

      <Button 
        type="submit" 
        size="lg"
        className="w-full bg-[#ED1C24] hover:bg-[#C41922] text-white"
        disabled={isSubmitting || !acceptedPrivacy || !role}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar mensaje"
        )}
      </Button>

      {error ? (
        <p className="text-sm text-red-600 text-center">{error}</p>
      ) : null}

      <p className="text-xs text-gray-500 text-center">
        Los campos marcados con * son obligatorios.
      </p>
    </form>
  )
}
