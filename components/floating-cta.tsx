"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible || isDismissed) return null

  return (
    <div className="fixed bottom-20 right-4 z-40 md:hidden animate-in slide-in-from-bottom duration-300">
      <div className="relative">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-gray-800 text-white flex items-center justify-center"
          aria-label="Cerrar"
        >
          <X className="h-3 w-3" />
        </button>
        <Link href="/contacto">
          <Button 
            size="lg"
            className="bg-[#ED1C24] hover:bg-[#C41922] text-white shadow-lg gap-2 rounded-full px-6"
          >
            <MessageCircle className="h-5 w-5" />
            Contactar
          </Button>
        </Link>
      </div>
    </div>
  )
}
