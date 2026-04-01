"use client"

import Script from "next/script"
import { useEffect, useState } from "react"

export function GoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false)
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    setHasConsent(consent === "true")

    const handleStorageChange = () => {
      const newConsent = localStorage.getItem("cookie-consent")
      setHasConsent(newConsent === "true")
    }

    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])

  if (!gaId || !hasConsent) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}
