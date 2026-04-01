"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCookieConsent } from "@/components/cookie-consent"

const footerLinks = {
  proyecto: [
    { name: "¿Qué es?", href: "/proyecto-educativo" },
    { name: "Cómo Funciona", href: "/como-funciona" },
    { name: "STEM + Sostenibilidad", href: "/stem-sostenibilidad" },
  ],
  comunidad: [
    { name: "Eventos", href: "/eventos" },
    { name: "Partners", href: "/partners" },
    { name: "Galería", href: "/galeria" },
  ],
  legal: [
    { name: "Aviso Legal", href: "/aviso-legal" },
    { name: "Política de Privacidad", href: "/privacidad" },
    { name: "Política de Cookies", href: "/cookies" },
  ],
}

export function Footer() {
  const { consent, openConsentDialog } = useCookieConsent()

  const getConsentStatusText = () => {
    if (consent === null) return "Sin configurar"
    if (consent === true) return "Aceptadas"
    return "Rechazadas"
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <Image
              src="/logo-academy.png"
              alt="Scalextric Academy"
              width={180}
              height={50}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Formación STEM innovadora que utiliza la emoción de Scalextric para 
              enseñar Ciencia, Tecnología, Ingeniería y Matemáticas a estudiantes 
              de ESO y Bachillerato.
            </p>
            <Link href="/contacto">
              <Button className="bg-[#ED1C24] hover:bg-[#C41922] text-white">
                Contactar
              </Button>
            </Link>
          </div>

          {/* Enlaces Proyecto */}
          <div>
            <h3 className="font-semibold text-white mb-4">Proyecto</h3>
            <ul className="space-y-3">
              {footerLinks.proyecto.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#ED1C24] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces Comunidad */}
          <div>
            <h3 className="font-semibold text-white mb-4">Comunidad</h3>
            <ul className="space-y-3">
              {footerLinks.comunidad.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#ED1C24] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#ED1C24] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Scalextric Academy. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Cookies: {getConsentStatusText()}</span>
              <button
                onClick={openConsentDialog}
                className="text-[#ED1C24] hover:text-[#FF3B42] underline transition-colors"
              >
                Cambiar preferencias
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
