"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const LABELS: Record<string, string> = {
  "proyecto-educativo": "Proyecto Educativo",
  "como-funciona": "Cómo Funciona",
  "stem-sostenibilidad": "STEM + Sostenibilidad",
  eventos: "Eventos",
  partners: "Partners",
  galeria: "Galería",
  contacto: "Contacto",
  "aviso-legal": "Aviso Legal",
  privacidad: "Privacidad",
  cookies: "Cookies",
}

function toLabel(segment: string) {
  return LABELS[segment] ?? decodeURIComponent(segment).replace(/-/g, " ")
}

export function PageBreadcrumb() {
  const pathname = usePathname()

  if (!pathname || pathname === "/" || pathname.startsWith("/portal")) {
    return null
  }

  const segments = pathname.split("/").filter(Boolean)
  const crumbs = segments.map((segment, index) => ({
    href: `/${segments.slice(0, index + 1).join("/")}`,
    label: toLabel(segment),
  }))

  return (
    <div className="fixed top-20 left-4 z-40 md:top-[5.625rem] md:left-8">
      <nav
        aria-label="Breadcrumb"
        className="rounded-md bg-black/30 px-3 py-2 backdrop-blur-sm"
      >
        <ol className="flex items-center gap-2 text-xs md:text-sm text-white">
          <li>
            <Link href="/" className="hover:text-[#ED1C24] transition-colors">
              Inicio
            </Link>
          </li>
          {crumbs.map((crumb) => (
            <li key={crumb.href} className="flex items-center gap-2">
              <span className="text-white/60">/</span>
              <Link
                href={crumb.href}
                className="hover:text-[#ED1C24] transition-colors"
              >
                {crumb.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}
