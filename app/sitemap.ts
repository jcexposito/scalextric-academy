import type { MetadataRoute } from 'next'
import { SITE_ROUTES, SITE_URL } from '@/lib/site-routes'

export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_ROUTES.filter((route) => route.inSitemap).map((route) => ({
    url: `${SITE_URL}${route.path === '/' ? '' : route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency ?? 'monthly',
    priority: route.priority ?? 0.5,
  }))
}
