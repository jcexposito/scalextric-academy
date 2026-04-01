import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { CTASection } from "@/components/cta-section"
import { FloatingCTA } from "@/components/floating-cta"
import { 
  Users, 
  Palette, 
  Wrench, 
  TestTube,
  Trophy,
  FileText,
  BarChart3,
  Award
} from "lucide-react"

export const metadata: Metadata = {
  title: "Cómo Funciona",
  description: "Conoce las 8 fases del proyecto Scalextric Academy: desde la formación de escuderías hasta la competición final. Metodología ABP aplicada a la educación STEM.",
  keywords: ["metodología ABP", "aprendizaje basado en proyectos", "fases proyecto educativo", "competición escolar STEM"]
}

const phases = [
  {
    number: 1,
    icon: Users,
    title: "Formación de Escuderías",
    description: "Los estudiantes se organizan en equipos de 4-6 personas, eligiendo nombre, colores corporativos y asignando roles específicos: jefe de equipo, diseñador, ingeniero, piloto, analista de datos y responsable de comunicación.",
    outcomes: ["Equipos formados", "Roles asignados", "Identidad corporativa definida"]
  },
  {
    number: 2,
    icon: Palette,
    title: "Diseño del Vehículo",
    description: "Cada escudería diseña la carrocería de su coche utilizando herramientas CAD. Aprenden principios de aerodinámica, estética y funcionalidad mientras crean un diseño único y competitivo.",
    outcomes: ["Bocetos iniciales", "Diseño CAD completo", "Especificaciones técnicas"]
  },
  {
    number: 3,
    icon: Wrench,
    title: "Construcción y Montaje",
    description: "Con los diseños aprobados, los equipos fabrican las piezas mediante impresión 3D y ensamblan el vehículo completo. Aprenden sobre materiales, tolerancias y técnicas de montaje.",
    outcomes: ["Piezas impresas", "Vehículo ensamblado", "Control de calidad realizado"]
  },
  {
    number: 4,
    icon: TestTube,
    title: "Pruebas y Ajustes",
    description: "Los equipos realizan pruebas en pista para evaluar el rendimiento. Analizan datos de velocidad, agarre y estabilidad para identificar áreas de mejora.",
    outcomes: ["Datos de rendimiento", "Análisis de problemas", "Plan de mejoras"]
  },
  {
    number: 5,
    icon: BarChart3,
    title: "Optimización",
    description: "Basándose en los datos recopilados, cada escudería implementa mejoras iterativas. Aplican el método científico para validar hipótesis y optimizar el rendimiento.",
    outcomes: ["Mejoras implementadas", "Rendimiento optimizado", "Documentación técnica"]
  },
  {
    number: 6,
    icon: FileText,
    title: "Documentación",
    description: "Los equipos elaboran un dossier técnico completo del proyecto, incluyendo memoria descriptiva, planos, cálculos y conclusiones. Practican la comunicación técnica profesional.",
    outcomes: ["Memoria técnica", "Portafolio visual", "Presentaci��n preparada"]
  },
  {
    number: 7,
    icon: Trophy,
    title: "Competición",
    description: "El momento culminante: todas las escuderías compiten en carreras oficiales. Se evalúa no solo la velocidad, sino también la regularidad, la estrategia y el trabajo en equipo.",
    outcomes: ["Carreras completadas", "Rankings establecidos", "Datos de competición"]
  },
  {
    number: 8,
    icon: Award,
    title: "Evaluación y Reconocimiento",
    description: "Ceremonia de clausura donde se reconoce el trabajo de todos los equipos. Se entregan premios en diferentes categorías: velocidad, diseño, innovación, trabajo en equipo y sostenibilidad.",
    outcomes: ["Premios entregados", "Evaluación completada", "Certificados de participación"]
  }
]

const methodology = [
  {
    title: "Aprendizaje Basado en Proyectos",
    description: "Los estudiantes aprenden resolviendo problemas reales y trabajando en proyectos significativos que conectan con sus intereses."
  },
  {
    title: "Trabajo Colaborativo",
    description: "Las escuderías funcionan como equipos profesionales donde cada miembro aporta sus fortalezas al objetivo común."
  },
  {
    title: "Evaluación Continua",
    description: "El progreso se evalúa de forma formativa a lo largo de todo el proyecto, no solo al final."
  },
  {
    title: "Conexión Curricular",
    description: "Todos los contenidos están alineados con los objetivos del currículo oficial de ESO y Bachillerato."
  }
]

export default function ComoFuncionaPage() {
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
              Metodología
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cómo funciona Scalextric Academy
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Un recorrido estructurado en 8 fases que guía a los estudiantes desde 
              la idea inicial hasta la competición final.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestra metodología
            </h2>
            <p className="text-lg text-gray-600">
              Scalextric Academy se basa en principios pedagógicos probados que 
              maximizan el aprendizaje y la motivación.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((item) => (
              <Card key={item.title} className="border-0 shadow-md bg-gray-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Phases Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Las 8 fases del proyecto
            </h2>
            <p className="text-lg text-gray-600">
              Cada fase está diseñada para construir sobre la anterior, creando 
              una progresión natural del aprendizaje.
            </p>
          </div>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div 
                key={phase.number}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <Card className="border-0 shadow-lg bg-white">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-14 w-14 rounded-full bg-[#ED1C24] flex items-center justify-center flex-shrink-0">
                          <phase.icon className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-[#ED1C24]">
                            Fase {phase.number}
                          </span>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {phase.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {phase.description}
                      </p>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">
                          Resultados de esta fase:
                        </h4>
                        <ul className="flex flex-wrap gap-2">
                          {phase.outcomes.map((outcome) => (
                            <li 
                              key={outcome}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                            >
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Number */}
                <div className="hidden lg:flex items-center justify-center w-24">
                  <div className="relative">
                    <span className="text-8xl font-bold text-gray-100">
                      {phase.number}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="¿Quieres saber más sobre cómo implementar el proyecto?"
        description="Nuestro equipo te guiará en la adaptación de Scalextric Academy a tu centro educativo."
        buttonText="Contactar"
        buttonHref="/contacto"
      />

      <FloatingCTA />
    </>
  )
}
