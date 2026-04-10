"use client"

import { usePathname } from "next/navigation"
import { Footer } from "@/components/footer"

export function SiteFooter() {
  const pathname = usePathname()
  const isPortal = pathname?.startsWith("/portal")

  if (isPortal) {
    return null
  }

  return <Footer />
}
