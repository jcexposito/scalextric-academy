import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { CTASection } from "@/components/cta-section"
import { FloatingCTA } from "@/components/floating-cta"
import { 
  Award, 
  Star, 
  Gem,
  CheckCircle2,
  Handshake,
  Heart
} from "lucide-react"

export const metadata: Metadata = {
  title: "Partners y Colaboradores",
  description: "Únete como partner de Scalextric Academy. Descubre las modalidades de colaboración Gold, Silver y Bronze para empresas y organizaciones.",
  keywords: ["partner educativo", "patrocinio STEM", "colaboración empresas educación", "responsabilidad social corporativa"]
}

const partnerTiers = [
  {
    icon: Gem,
    name: "Gold Partner",
    color: "from-yellow-400 to-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    description: "El máximo nivel de colaboración con visibilidad preferente y acceso exclusivo.",
    benefits: [
      "Logo destacado en todos los materiales",
      "Naming de competiciones",
      "Acceso a eventos exclusivos",
      "Mentoría de escuderías",
      "Reportes detallados de impacto",
      "Presencia en medios"
    ]
  },
  {
    icon: Award,
    name: "Silver Partner",
    color: "from-gray-400 to-gray-600",
    bgColor: "bg-gray-50",
    borderColor: "border-gray-200",
    iconBg: "bg-gray-100",
    iconColor: "text-gray-600",
    description: "Colaboración activa con visibilidad en eventos y materiales educativos.",
    benefits: [
      "Logo en materiales del programa",
      "Presencia en eventos regionales",
      "Acceso a jornadas de networking",
      "Mentoría compartida",
      "Reportes trimestrales"
    ]
  },
  {
    icon: Star,
    name: "Bronze Partner",
    color: "from-amber-600 to-amber-800",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    description: "Primer nivel de colaboración ideal para empezar a formar parte del ecosistema.",
    benefits: [
      "Logo en la web del programa",
      "Mención en eventos locales",
      "Newsletter exclusiva",
      "Reporte anual de impacto"
    ]
  }
]

const whyPartner = [
  {
    icon: Heart,
    title: "Impacto Social",
    description: "Contribuye a la formación de las próximas generaciones de profesionales STEM."
  },
  {
    icon: Handshake,
    title: "Conexión con Talento",
    description: "Acceso directo a estudiantes motivados y con vocación tecnológica."
  },
  {
    icon: Star,
    title: "Visibilidad de Marca",
    description: "Asocia tu marca a la innovación educativa y los valores de Scalextric."
  }
]

export default function PartnersPage() {
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
              Partners
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Únete como Partner
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Colabora con Scalextric Academy y forma parte de un proyecto educativo 
              que está transformando la enseñanza STEM.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué ser partner?
            </h2>
            <p className="text-lg text-gray-600">
              Ser partner de Scalextric Academy es una oportunidad única de contribuir 
              a la educación mientras fortaleces tu marca.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {whyPartner.map((reason) => (
              <div key={reason.title} className="text-center">
                <div className="h-16 w-16 rounded-full bg-[#ED1C24]/10 flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="h-8 w-8 text-[#ED1C24]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modalidades de colaboración
            </h2>
            <p className="text-lg text-gray-600">
              Elige el nivel de colaboración que mejor se adapte a tu organización.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerTiers.map((tier) => (
              <Card 
                key={tier.name} 
                className={`border-2 ${tier.borderColor} shadow-lg hover:shadow-xl transition-shadow overflow-hidden`}
              >
                <div className={`h-2 bg-gradient-to-r ${tier.color}`} />
                <CardContent className="p-8">
                  <div className={`h-14 w-14 rounded-full ${tier.iconBg} flex items-center justify-center mb-6`}>
                    <tier.icon className={`h-7 w-7 ${tier.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {tier.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {tier.description}
                  </p>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros partners
            </h2>
            <p className="text-lg text-gray-600">
              Empresas y organizaciones que ya forman parte del ecosistema Scalextric Academy.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-12 text-center">
            <p className="text-gray-500 italic">
              Tu empresa podría estar aquí. Contacta con nosotros para conocer 
              todas las posibilidades de colaboración.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="¿Interesado en ser partner?"
        description="Contacta con nosotros y te explicamos todas las opciones de colaboración."
        buttonText="Contactar"
        buttonHref="/contacto"
      />

      <FloatingCTA />
    </>
  )
}
