import type { Metadata } from "next"
import Image from "next/image"
import { CTASection } from "@/components/cta-section"
import { FloatingCTA } from "@/components/floating-cta"

export const metadata: Metadata = {
  title: "Galería",
  description: "Galería de imágenes de Scalextric Academy: talleres, competiciones, equipos y eventos educativos STEM.",
  keywords: ["galería Scalextric Academy", "fotos talleres STEM", "imágenes competiciones escolares"]
}

const galleryImages = [
  {
    src: "/images/hero-scalextric.jpg",
    alt: "Pista de Scalextric en evento educativo",
    category: "Eventos"
  },
  {
    src: "/images/taller-stem.jpg",
    alt: "Estudiantes trabajando en taller STEM",
    category: "Talleres"
  },
  {
    src: "/images/competicion.jpg",
    alt: "Competición escolar de slot cars",
    category: "Competiciones"
  },
  {
    src: "/images/equipo-escuderia.jpg",
    alt: "Equipo de escudería trabajando en su proyecto",
    category: "Equipos"
  }
]

export default function GaleriaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-[#ED1C24] text-white text-sm font-semibold rounded-full mb-6">
              Galería
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Galería de imágenes
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Descubre en imágenes la emoción de Scalextric Academy: talleres, 
              competiciones y el trabajo de nuestras escuderías.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg"
              >
                <div className="aspect-video relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-[#ED1C24] text-white text-xs font-semibold rounded-full mb-2">
                      {image.category}
                    </span>
                    <p className="text-white font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gray-50 rounded-2xl p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Próximamente más contenido
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Estamos preparando más material visual de nuestros talleres, 
                competiciones y eventos. ¡Vuelve pronto para ver las novedades!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="¿Quieres ver Scalextric Academy en acción?"
        description="Contacta con nosotros y organizamos una demostración en tu centro."
        buttonText="Solicitar Demo"
        buttonHref="/contacto"
      />

      <FloatingCTA />
    </>
  )
}
