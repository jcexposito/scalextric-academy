import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/portal/dashboard/', '/api/'],
    },
    sitemap: 'https://scalextric-academy.com/sitemap.xml',
  }
}
