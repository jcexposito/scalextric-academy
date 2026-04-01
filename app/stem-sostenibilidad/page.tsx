import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { CTASection } from "@/components/cta-section"
import { FloatingCTA } from "@/components/floating-cta"
import { 
  Leaf, 
  Recycle, 
  BarChart3, 
  Globe,
  Factory,
  Car,
  Lightbulb,
  TreePine,
  Users,
  Building2
} from "lucide-react"

export const metadata: Metadata = {
  title: "STEM + Sostenibilidad",
  description: "Educación STEM con conciencia medioambiental: cálculo de huella de carbono, materiales sostenibles y ecosistema colaborativo en Scalextric Academy.",
  keywords: ["STEM sostenibilidad", "huella de carbono educación", "educación medioambiental", "materiales sostenibles", "economía circular educación"]
}

const carbonActivities = [
  {
    icon: Factory,
    title: "Fabricación",
    description: "Análisis del impacto de los materiales utilizados en la construcción del vehículo: plásticos, metales, electrónica."
  },
  {
    icon: Car,
    title: "Uso y Competición",
    description: "Cálculo del consumo energético durante las prácticas y competiciones, incluyendo la electricidad de las pistas."
  },
  {
    icon: Recycle,
    title: "Fin de Vida",
    description: "Planificación del reciclaje y reutilización de componentes al finalizar el proyecto."
  }
]

const sustainableActions = [
  {
    icon: Lightbulb,
    title: "Diseño Eficiente",
    description: "Optimizar el diseño para reducir el uso de material sin comprometer el rendimiento."
  },
  {
    icon: Recycle,
    title: "Materiales Reciclados",
    description: "Priorizar filamentos de impresión 3D reciclados o biodegradables."
  },
  {
    icon: TreePine,
    title: "Compensación",
    description: "Calcular y proponer acciones de compensación por las emisiones generadas."
  }
]

const ecosystem = [
  {
    icon: Building2,
    title: "Centros Educativos",
    description: "Colegios e institutos que implementan el programa y aportan el contexto pedagógico."
  },
  {
    icon: Factory,
    title: "Empresas Patrocinadoras",
    description: "Compañías que apoyan el proyecto y ofrecen mentoría profesional."
  },
  {
    icon: Users,
    title: "Familias",
    description: "Padres y tutores que refuerzan el aprendizaje en el hogar."
  },
  {
    icon: Globe,
    title: "Comunidad",
    description: "Sociedad local que se beneficia del talento STEM desarrollado."
  }
]

export default function StemSostenibilidadPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-green-900 to-green-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-full mb-6">
              Sostenibilidad
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              STEM + Sostenibilidad
            </h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Integramos la conciencia medioambiental en cada fase del proyecto, 
              preparando a los estudiantes para un futuro sostenible.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                La sostenibilidad como eje transversal
              </h2>
            </div>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                En Scalextric Academy creemos que la educación STEM debe ir de la mano 
                de la <strong>responsabilidad medioambiental</strong>. Por eso, hemos integrado 
                la sostenibilidad como un eje transversal que atraviesa todas las fases del proyecto.
              </p>
              <p>
                Los estudiantes no solo aprenden ciencia y tecnología, sino que también 
                desarrollan una <strong>conciencia crítica</strong> sobre el impacto de sus 
                decisiones en el medio ambiente y aprenden a diseñar soluciones más sostenibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Huella de Carbono */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BarChart3 className="h-8 w-8 text-[#ED1C24]" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Cálculo de la huella de carbono
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Cada escudería calcula y analiza la huella de carbono de su proyecto, 
              aprendiendo a cuantificar el impacto medioambiental.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {carbonActivities.map((activity) => (
              <Card key={activity.title} className="border-0 shadow-lg bg-white">
                <CardContent className="p-8 text-center">
                  <div className="h-16 w-16 rounded-full bg-[#ED1C24]/10 flex items-center justify-center mx-auto mb-6">
                    <activity.icon className="h-8 w-8 text-[#ED1C24]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Acciones para reducir el impacto
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {sustainableActions.map((action) => (
                <div key={action.title} className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <action.icon className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {action.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {action.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ecosistema Colaborativo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Globe className="h-8 w-8 text-[#ED1C24]" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Ecosistema colaborativo
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Scalextric Academy funciona como un ecosistema donde diferentes actores 
              colaboran para crear una experiencia educativa completa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecosystem.map((actor) => (
              <Card key={actor.title} className="border-0 shadow-md hover:shadow-lg transition-shadow bg-gray-50">
                <CardContent className="p-6 text-center">
                  <div className="h-14 w-14 rounded-full bg-[#ED1C24] flex items-center justify-center mx-auto mb-4">
                    <actor.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {actor.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {actor.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Economía circular en la educación
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Promovemos un modelo donde los recursos educativos se comparten, 
                los materiales se reutilizan y el conocimiento fluye entre todos 
                los participantes del ecosistema, creando un círculo virtuoso de 
                aprendizaje y sostenibilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="¿Quieres que tu centro sea parte del cambio?"
        description="Únete a la comunidad de centros educativos comprometidos con la educación STEM sostenible."
        buttonText="Contactar"
        buttonHref="/contacto"
      />

      <FloatingCTA />
    </>
  )
}
