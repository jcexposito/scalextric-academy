export type SiteRoute = {
  path: string
  label: string
  inMenu?: boolean
  inSitemap?: boolean
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never"
  priority?: number
}

export const SITE_URL = "https://scalextric-academy.com"

export const SITE_ROUTES: SiteRoute[] = [
  {
    path: "/",
    label: "Inicio",
    inSitemap: true,
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/proyecto-educativo",
    label: "Proyecto Educativo",
    inMenu: true,
    inSitemap: true,
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/como-funciona",
    label: "Cómo Funciona",
    inMenu: true,
    inSitemap: true,
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/stem-sostenibilidad",
    label: "STEM + Sostenibilidad",
    inMenu: true,
    inSitemap: true,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/eventos",
    label: "Eventos",
    inMenu: true,
    inSitemap: true,
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/partners",
    label: "Partners",
    inMenu: true,
    inSitemap: true,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/galeria",
    label: "Galería",
    inMenu: true,
    inSitemap: true,
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    path: "/contacto",
    label: "Contacto",
    inMenu: true,
    inSitemap: true,
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/privacidad",
    label: "Privacidad",
    inSitemap: true,
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    path: "/aviso-legal",
    label: "Aviso Legal",
    inSitemap: true,
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    path: "/cookies",
    label: "Cookies",
    inSitemap: true,
    changeFrequency: "yearly",
    priority: 0.3,
  },
]

export function getRouteLabel(pathOrSegment: string): string | undefined {
  const clean = pathOrSegment.startsWith("/") ? pathOrSegment : `/${pathOrSegment}`
  return SITE_ROUTES.find((route) => route.path === clean)?.label
}
