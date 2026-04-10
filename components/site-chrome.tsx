"use client"

import { usePathname } from "next/navigation"
import { Header } from "@/components/header"
import { PageBreadcrumb } from "@/components/page-breadcrumb"

export function SiteChrome() {
  const pathname = usePathname()
  const isPortal = pathname?.startsWith("/portal")

  if (isPortal) {
    return null
  }

  return (
    <>
      <Header />
      <PageBreadcrumb />
    </>
  )
}
