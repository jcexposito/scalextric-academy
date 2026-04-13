"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, CheckCircle2 } from "lucide-react"

export function PartnersContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const payload = {
        formType: "partners",
        nombreApellidos: String(formData.get("nombreApellidos") ?? ""),
        telefono: String(formData.get("telefono") ?? ""),
        email: String(formData.get("email") ?? ""),
        empresa: String(formData.get("empresa") ?? ""),
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
          typeof data?.error === "string"
            ? data.error
            : "No se ha podido enviar. Inténtalo de nuevo en unos minutos."
        )
      }

      setIsSubmitted(true)
      e.currentTarget.reset()
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
        <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Solicitud enviada!</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Gracias por tu interés en colaborar como partner. Te contactaremos lo antes posible.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="nombreApellidos">Nombre y apellidos *</Label>
          <Input id="nombreApellidos" name="nombreApellidos" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="telefono">Teléfono *</Label>
          <Input id="telefono" name="telefono" type="tel" required />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico *</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="empresa">Nombre de empresa (opcional)</Label>
          <Input id="empresa" name="empresa" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensaje">Mensaje *</Label>
        <Textarea id="mensaje" name="mensaje" rows={5} required />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-[#ED1C24] hover:bg-[#C41922] text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar solicitud"
        )}
      </Button>

      {error ? <p className="text-sm text-red-600 text-center">{error}</p> : null}
    </form>
  )
}
