import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CTASection } from "@/components/cta-section"
import { FloatingCTA } from "@/components/floating-cta"
import { 
  GraduationCap, 
  Users, 
  Target, 
  Brain,
  Sparkles,
  BookOpen,
  Cpu,
  Calculator,
  Atom
} from "lucide-react"

export const metadata: Metadata = {
  title: "Proyecto Educativo",
  description: "Descubre el proyecto educativo de Scalextric Academy: formación STEM innovadora para ESO y Bachillerato basada en el aprendizaje por proyectos con slot cars.",
  keywords: ["proyecto educativo STEM", "educación secundaria", "aprendizaje basado en proyectos", "competencias educativas", "Scalextric educación"]
}

const audiences = [
  {
    icon: GraduationCap,
    title: "Centros Educativos",
    description: "Colegios e institutos de ESO y Bachillerato que buscan metodologías innovadoras para enseñar STEM."
  },
  {
    icon: Users,
    title: "Asociaciones y Clubs",
    description: "Organizaciones juveniles, clubs de ciencia y asociaciones educativas interesadas en actividades STEM."
  },
  {
    icon: Target,
    title: "Empresas",
    description: "Compañías que deseen patrocinar programas educativos y fomentar vocaciones STEM."
  }
]

const competencies = [
  {
    icon: Brain,
    title: "Pensamiento Crítico",
    description: "Análisis de problemas, evaluación de soluciones y toma de decisiones fundamentadas."
  },
  {
    icon: Sparkles,
    title: "Creatividad e Innovación",
    description: "Diseño original de soluciones y mejora continua de los vehículos."
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Trabajo en equipo efectivo con roles definidos y responsabilidades compartidas."
  },
  {
    icon: BookOpen,
    title: "Comunicación",
    description: "Presentación de proyectos, documentación técnica y defensa de decisiones."
  }
]

const stemAreas = [
  {
    icon: Atom,
    title: "Ciencia (Science)",
    color: "bg-blue-500",
    topics: ["Física del movimiento", "Fricción y aerodinámica", "Energía y electricidad", "Materiales y propiedades"]
  },
  {
    icon: Cpu,
    title: "Tecnología (Technology)",
    color: "bg-green-500",
    topics: ["Diseño CAD", "Impresión 3D", "Electrónica básica", "Herramientas digitales"]
  },
  {
    icon: Target,
    title: "Ingeniería (Engineering)",
    color: "bg-orange-500",
    topics: ["Proceso de diseño", "Prototipado", "Optimización", "Control de calidad"]
  },
  {
    icon: Calculator,
    title: "Matemáticas (Maths)",
    color: "bg-purple-500",
    topics: ["Cálculo de velocidades", "Estadística de tiempos", "Geometría aplicada", "Análisis de datos"]
  }
]

export default function ProyectoEducativoPage() {
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
              Proyecto Educativo
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Educación STEM que inspira y transforma
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Un proyecto innovador que utiliza la magia de Scalextric para despertar 
              vocaciones científicas y tecnológicas en los estudiantes.
            </p>
          </div>
        </div>
      </section>

      {/* ¿Qué es? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Qué es Scalextric Academy?
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Scalextric Academy es un <strong>programa educativo STEM</strong> que aprovecha 
                  la legendaria marca Scalextric, con más de 65 años de historia, para crear 
                  experiencias de aprendizaje únicas y memorables.
                </p>
                <p>
                  Utilizamos la metodología de <strong>Aprendizaje Basado en Proyectos (ABP)</strong>, 
                  donde los estudiantes trabajan en equipo formando escuderías, asumiendo roles 
                  específicos y enfrentándose a retos reales de diseño, construcción y competición.
                </p>
                <p>
                  El proyecto conecta directamente con el <strong>currículo oficial</strong> de 
                  ESO y Bachillerato, permitiendo a los docentes integrar contenidos de Física, 
                  Matemáticas, Tecnología e incluso Educación Plástica de forma transversal.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/equipo-escuderia.jpg"
                alt="Equipo trabajando en su proyecto"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ¿A quién va dirigido? */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿A quién va dirigido?
            </h2>
            <p className="text-lg text-gray-600">
              Scalextric Academy está diseñado para diferentes tipos de organizaciones 
              comprometidas con la educación y la innovación.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {audiences.map((audience) => (
              <Card key={audience.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white text-center">
                <CardContent className="p-8">
                  <div className="h-16 w-16 rounded-full bg-[#ED1C24]/10 flex items-center justify-center mx-auto mb-6">
                    <audience.icon className="h-8 w-8 text-[#ED1C24]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {audience.title}
                  </h3>
                  <p className="text-gray-600">
                    {audience.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* STEM Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Las 4 áreas STEM en acción
            </h2>
            <p className="text-lg text-gray-600">
              Cada disciplina STEM cobra vida a través de actividades prácticas 
              y contextualizadas en el mundo de las carreras.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stemAreas.map((area) => (
              <Card key={area.title} className="border-0 shadow-lg overflow-hidden bg-white">
                <div className={`h-2 ${area.color}`} />
                <CardContent className="p-6">
                  <div className={`h-12 w-12 rounded-lg ${area.color} bg-opacity-20 flex items-center justify-center mb-4`}>
                    <area.icon className="h-6 w-6 text-gray-800" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {area.title}
                  </h3>
                  <ul className="space-y-2">
                    {area.topics.map((topic) => (
                      <li key={topic} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className={`h-1.5 w-1.5 rounded-full ${area.color}`} />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competencias */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Competencias del siglo XXI
            </h2>
            <p className="text-lg text-gray-600">
              Más allá del conocimiento técnico, desarrollamos habilidades 
              esenciales para el futuro profesional de los estudiantes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {competencies.map((competency) => (
              <div key={competency.title} className="text-center">
                <div className="h-16 w-16 rounded-full bg-[#ED1C24] flex items-center justify-center mx-auto mb-4">
                  <competency.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {competency.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {competency.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="¿Quieres implementar Scalextric Academy en tu centro?"
        description="Contacta con nosotros y te explicamos cómo adaptar el proyecto a las necesidades de tu institución."
        buttonText="Solicitar Información"
        buttonHref="/contacto"
      />

      <FloatingCTA />
    </>
  )
}
