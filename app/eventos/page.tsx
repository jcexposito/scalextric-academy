import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CTASection } from "@/components/cta-section"
import { FloatingCTA } from "@/components/floating-cta"
import { 
  Trophy, 
  Users, 
  Building2, 
  Globe,
  Calendar,
  MapPin
} from "lucide-react"

export const metadata: Metadata = {
  title: "Eventos y Competiciones",
  description: "Descubre las competiciones y eventos de Scalextric Academy: torneos locales, regionales y nacionales de slot cars educativos.",
  keywords: ["competición escolar Scalextric", "torneo STEM", "eventos educativos", "carreras escolares"]
}

const eventTypes = [
  {
    icon: Building2,
    title: "Competiciones Locales",
    description: "Torneos internos dentro del propio centro educativo donde las escuderías compiten entre sí.",
    features: ["Dentro del centro", "Todas las escuderías", "Premios internos"]
  },
  {
    icon: Users,
    title: "Competiciones Regionales",
    description: "Encuentros entre centros de la misma comunidad autónoma o región.",
    features: ["Varios centros", "Clasificación regional", "Intercambio de experiencias"]
  },
  {
    icon: Globe,
    title: "Competiciones Nacionales",
    description: "El gran evento anual donde los mejores equipos de toda España se enfrentan.",
    features: ["Nivel nacional", "Premios especiales", "Cobertura mediática"]
  }
]

const upcomingEvents = [
  {
    title: "Final Regional Cataluña",
    date: "15 Mayo 2026",
    location: "Barcelona",
    type: "Regional",
    status: "Inscripción abierta"
  },
  {
    title: "Torneo Intercentros Madrid",
    date: "22 Mayo 2026",
    location: "Madrid",
    type: "Regional",
    status: "Inscripción abierta"
  },
  {
    title: "Final Nacional 2026",
    date: "12 Junio 2026",
    location: "Valencia",
    type: "Nacional",
    status: "Próximamente"
  }
]

const categories = [
  {
    title: "Velocidad",
    description: "El equipo con el mejor tiempo en vuelta rápida."
  },
  {
    title: "Regularidad",
    description: "Consistencia en los tiempos a lo largo de la carrera."
  },
  {
    title: "Mejor Diseño",
    description: "Valoración del diseño y acabado del vehículo."
  },
  {
    title: "Innovación",
    description: "Soluciones creativas y originales aplicadas."
  },
  {
    title: "Trabajo en Equipo",
    description: "Colaboración y coordinación durante el proyecto."
  },
  {
    title: "Sostenibilidad",
    description: "Compromiso con la reducción del impacto ambiental."
  }
]

export default function EventosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-[#ED1C24] text-white text-sm font-semibold rounded-full mb-6">
              Eventos
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Competiciones y Eventos
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              La emoción de la competición como motor del aprendizaje. Descubre 
              nuestros torneos y eventos educativos.
            </p>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tipos de competiciones
            </h2>
            <p className="text-lg text-gray-600">
              Organizamos eventos a diferentes niveles para adaptarnos a las 
              necesidades de cada centro.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {eventTypes.map((type) => (
              <Card key={type.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-full bg-[#ED1C24]/10 flex items-center justify-center mb-6">
                    <type.icon className="h-7 w-7 text-[#ED1C24]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {type.description}
                  </p>
                  <ul className="space-y-2">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <Trophy className="h-4 w-4 text-[#ED1C24]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Próximos eventos
            </h2>
            <p className="text-lg text-gray-600">
              Consulta el calendario de competiciones y no te pierdas ningún evento.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {upcomingEvents.map((event) => (
              <Card key={event.title} className="border-0 shadow-md bg-white">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-[#ED1C24]/10 flex items-center justify-center flex-shrink-0">
                        <Trophy className="h-6 w-6 text-[#ED1C24]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {event.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {event.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">{event.type}</Badge>
                      <Badge 
                        className={
                          event.status === "Inscripción abierta" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-gray-100 text-gray-800"
                        }
                      >
                        {event.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Categorías de premios
            </h2>
            <p className="text-lg text-gray-600">
              En nuestras competiciones reconocemos diferentes aspectos del trabajo 
              de las escuderías.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {categories.map((category) => (
              <div 
                key={category.title}
                className="p-6 bg-gray-50 rounded-xl border border-gray-100"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="¿Quieres participar en nuestros eventos?"
        description="Contacta con nosotros para inscribir a tu centro en las próximas competiciones."
        buttonText="Solicitar Información"
        buttonHref="/contacto"
      />

      <FloatingCTA />
    </>
  )
}
