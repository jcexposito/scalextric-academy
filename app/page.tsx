import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Rocket, 
  Users, 
  Trophy, 
  Lightbulb, 
  GraduationCap, 
  Leaf,
  ArrowRight,
  CheckCircle2
} from "lucide-react"
import { CTASection } from "@/components/cta-section"
import { FloatingCTA } from "@/components/floating-cta"

const features = [
  {
    icon: Rocket,
    title: "Aprendizaje STEM",
    description: "Ciencia, Tecnología, Ingeniería y Matemáticas aplicadas de forma práctica y divertida."
  },
  {
    icon: Users,
    title: "Trabajo en Equipo",
    description: "Los alumnos forman escuderías y colaboran como en equipos profesionales de competición."
  },
  {
    icon: Trophy,
    title: "Competiciones",
    description: "Eventos y carreras que fomentan la superación personal y el espíritu deportivo."
  },
  {
    icon: Lightbulb,
    title: "Creatividad",
    description: "Diseño, personalización y mejora de vehículos potenciando la innovación."
  },
  {
    icon: GraduationCap,
    title: "Curricular",
    description: "Contenidos alineados con el currículo de ESO y Bachillerato."
  },
  {
    icon: Leaf,
    title: "Sostenibilidad",
    description: "Concienciación medioambiental y cálculo de huella de carbono integrados."
  }
]

const stats = [
  { value: "8", label: "Fases del proyecto" },
  { value: "6+", label: "Competencias desarrolladas" },
  { value: "100%", label: "Aprendizaje práctico" },
  { value: "ESO/Bach", label: "Niveles educativos" }
]

const testimonials = [
  {
    quote: "El proyecto ha conseguido que mis alumnos se interesen por la física y las matemáticas de una forma que nunca había visto antes.",
    author: "María González",
    role: "Profesora de Física, IES Ejemplo"
  },
  {
    quote: "Trabajar en equipo como una escudería real nos ha enseñado mucho sobre colaboración y responsabilidad.",
    author: "Carlos Martínez",
    role: "Estudiante de 4.º ESO"
  }
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-scalextric.jpg"
            alt="Scalextric Academy - Formación STEM"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-32 md:py-40">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-[#ED1C24] text-white text-sm font-semibold rounded-full mb-6">
              Formación STEM Innovadora
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
              Aprende ciencia y tecnología con la emoción de{" "}
              <span className="text-[#ED1C24]">Scalextric</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              Un programa educativo único que combina la pasión por las carreras de slot 
              con el aprendizaje de Ciencia, Tecnología, Ingeniería y Matemáticas para 
              estudiantes de ESO y Bachillerato.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacto">
                <Button size="lg" className="bg-[#ED1C24] hover:bg-[#C41922] text-white font-semibold text-lg px-8">
                  Solicitar Información
                </Button>
              </Link>
              <Link href="/proyecto-educativo">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white bg-transparent text-[#ED1C24] hover:bg-white hover:text-[#ED1C24] font-semibold text-lg px-8"
                >
                  Conocer el Proyecto
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* ¿Qué es Scalextric Academy? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Qué es Scalextric Academy?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Scalextric Academy es un innovador proyecto educativo que aprovecha la 
                legendaria marca Scalextric para crear una experiencia de aprendizaje 
                STEM única y motivadora.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Los estudiantes aprenden conceptos de Física, Matemáticas, Tecnología 
                e Ingeniería mientras diseñan, construyen y compiten con sus propios 
                vehículos de slot, trabajando en equipo como auténticas escuderías 
                de competición.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Aprendizaje Basado en Proyectos (ABP)",
                  "Competencias del siglo XXI",
                  "Alineado con el currículo oficial",
                  "Fomenta el trabajo en equipo"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-[#ED1C24] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/proyecto-educativo">
                <Button className="bg-[#ED1C24] hover:bg-[#C41922] text-white gap-2">
                  Descubre más sobre el proyecto
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/taller-stem.jpg"
                  alt="Taller STEM con Scalextric"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#ED1C24] text-white p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">+65</p>
                <p className="text-sm">años de historia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Una metodología educativa completa
            </h2>
            <p className="text-lg text-gray-600">
              Combinamos la diversión y la competición con un riguroso enfoque 
              pedagógico basado en competencias.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-[#ED1C24]/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-[#ED1C24]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#ED1C24]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-white/80 text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo Funciona Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/images/competicion.jpg"
                alt="Competición escolar de Scalextric"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                8 fases para una experiencia completa
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                El proyecto se desarrolla a lo largo de 8 fases cuidadosamente 
                diseñadas que llevan a los estudiantes desde la formación de 
                equipos hasta la competición final, pasando por el diseño, 
                la construcción y la optimización de sus vehículos.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Formación de escuderías y roles",
                  "Diseño y personalización del vehículo",
                  "Construcción y montaje",
                  "Pruebas, ajustes y competición"
                ].map((phase, index) => (
                  <div key={phase} className="flex items-center gap-4">
                    <span className="h-8 w-8 rounded-full bg-[#ED1C24] text-white flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{phase}</span>
                  </div>
                ))}
              </div>
              <Link href="/como-funciona">
                <Button className="bg-[#ED1C24] hover:bg-[#C41922] text-white gap-2">
                  Ver todas las fases
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen de nosotros
            </h2>
            <p className="text-lg text-gray-600">
              Profesores y alumnos comparten su experiencia con Scalextric Academy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author} className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <svg className="h-8 w-8 text-[#ED1C24]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="¿Listo para llevar STEM a tu centro educativo?"
        description="Contacta con nosotros y descubre cómo Scalextric Academy puede transformar la forma de aprender de tus alumnos."
        buttonText="Solicitar Información"
        buttonHref="/contacto"
      />

      {/* Floating CTA for mobile */}
      <FloatingCTA />
    </>
  )
}
