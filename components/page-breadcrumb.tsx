"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { getRouteLabel } from "@/lib/site-routes"

function toLabel(segment: string) {
  return getRouteLabel(segment) ?? decodeURIComponent(segment).replace(/-/g, " ")
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
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://scalextric-academy.com/",
      },
      ...crumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: crumb.label,
        item: `https://scalextric-academy.com${crumb.href}`,
      })),
    ],
  }

  return (
    <div className="fixed top-20 left-4 z-40 md:top-[5.625rem] md:left-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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
