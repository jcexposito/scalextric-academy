import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CookieConsent } from '@/components/cookie-consent'
import { GoogleAnalytics } from '@/components/google-analytics'
import { SiteChrome } from '@/components/site-chrome'
import { SiteFooter } from '@/components/site-footer'
import { SITE_URL } from '@/lib/site-routes'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Scalextric Academy | Formación STEM con Slot Cars para Colegios e Institutos',
    template: '%s | Scalextric Academy'
  },
  description: 'Programa educativo STEM que utiliza Scalextric para enseñar Ciencia, Tecnología, Ingeniería y Matemáticas en ESO y Bachillerato. Talleres prácticos, competiciones escolares y aprendizaje basado en proyectos.',
  keywords: ['STEM educación', 'Scalextric educativo', 'taller STEM ESO', 'taller STEM Bachillerato', 'robótica educativa', 'slot cars educación', 'competición escolar', 'aprendizaje basado en proyectos', 'formación tecnológica colegios'],
  authors: [{ name: 'Scalextric Academy' }],
  creator: 'Scalextric Academy',
  publisher: 'Scalextric Academy',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: SITE_URL,
    siteName: 'Scalextric Academy',
    title: 'Scalextric Academy | Formación STEM con Slot Cars',
    description: 'Aprende Ciencia, Tecnología, Ingeniería y Matemáticas de forma práctica y divertida con Scalextric.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Scalextric Academy - Formación STEM',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scalextric Academy | Formación STEM con Slot Cars',
    description: 'Aprende Ciencia, Tecnología, Ingeniería y Matemáticas de forma práctica y divertida.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/logo-academy.png',
    apple: '/logo-academy.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Scalextric Academy',
    url: SITE_URL,
    logo: `${SITE_URL}/logo-academy.png`,
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Scalextric Academy',
    url: SITE_URL,
    inLanguage: 'es-ES',
  }

  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <GoogleAnalytics />
        <SiteChrome />
        <main>{children}</main>
        <SiteFooter />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
