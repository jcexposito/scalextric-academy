import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta con Scalextric Academy para información sobre nuestros programas STEM para colegios e institutos. Solicita información sin compromiso.",
  keywords: ["contacto Scalextric Academy", "información programa STEM", "talleres educativos colegios"]
}

const contactReasons = [
  {
    icon: MessageSquare,
    title: "Información del Programa",
    description: "Solicita información detallada sobre cómo implementar Scalextric Academy en tu centro."
  },
  {
    icon: Clock,
    title: "Próximas Sesiones",
    description: "Consulta las fechas disponibles para las próximas sesiones y eventos."
  },
  {
    icon: MapPin,
    title: "Cobertura Geográfica",
    description: "Pregunta si llegamos a tu zona y las opciones disponibles."
  }
]

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-[#ED1C24] text-white text-sm font-semibold rounded-full mb-6">
              Contacto
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hablemos de tu proyecto
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Completa el formulario y nos pondremos en contacto contigo para 
              resolver tus dudas y explicarte cómo podemos ayudarte.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                ¿Por qué contactar?
              </h2>
              <div className="space-y-6">
                {contactReasons.map((reason) => (
                  <Card key={reason.title} className="border-0 shadow-md bg-gray-50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-lg bg-[#ED1C24]/10 flex items-center justify-center flex-shrink-0">
                          <reason.icon className="h-5 w-5 text-[#ED1C24]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {reason.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {reason.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Formulario de contacto
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Rellena el formulario y te llamaremos para informarte sobre 
                    las próximas sesiones disponibles.
                  </p>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
