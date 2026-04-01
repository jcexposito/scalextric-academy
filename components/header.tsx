"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Proyecto Educativo", href: "/proyecto-educativo" },
  { name: "Cómo Funciona", href: "/como-funciona" },
  { name: "STEM + Sostenibilidad", href: "/stem-sostenibilidad" },
  { name: "Eventos", href: "/eventos" },
  { name: "Partners", href: "/partners" },
  { name: "Galería", href: "/galeria" },
  { name: "Contacto", href: "/contacto" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-academy.png"
              alt="Scalextric Academy"
              width={180}
              height={50}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-[#ED1C24]/10 ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#ED1C24]"
                    : "text-white hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA and Portal */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/portal">
              <Button
                variant="ghost"
                size="sm"
                className={`gap-2 ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#ED1C24]"
                    : "text-white hover:text-white hover:bg-white/20"
                }`}
              >
                <User className="h-4 w-4" />
                Portal
              </Button>
            </Link>
            <Link href="/contacto">
              <Button
                className="bg-[#ED1C24] hover:bg-[#C41922] text-white font-semibold"
              >
                Solicitar Información
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={isScrolled ? "text-gray-700" : "text-white"}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between pb-6 border-b">
                  <Image
                    src="/logo-academy.png"
                    alt="Scalextric Academy"
                    width={140}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>
                <nav className="flex flex-col gap-1 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 text-base font-medium text-gray-700 hover:text-[#ED1C24] hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto pt-6 border-t space-y-3">
                  <Link href="/portal" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full gap-2">
                      <User className="h-4 w-4" />
                      Portal Alumno
                    </Button>
                  </Link>
                  <Link href="/contacto" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-[#ED1C24] hover:bg-[#C41922] text-white">
                      Solicitar Información
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
