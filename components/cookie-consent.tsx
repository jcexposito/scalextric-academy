"use client"

import { useState, useEffect, createContext, useContext, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { X, Cookie } from "lucide-react"
import Link from "next/link"

type ConsentContextType = {
  consent: boolean | null
  openConsentDialog: () => void
}

const ConsentContext = createContext<ConsentContextType>({
  consent: null,
  openConsentDialog: () => {},
})

export function useCookieConsent() {
  return useContext(ConsentContext)
}

export function CookieConsent({ children }: { children?: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false)
  const [consent, setConsent] = useState<boolean | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const savedConsent = localStorage.getItem("cookie-consent")
    if (savedConsent === null) {
      setIsVisible(true)
      setConsent(null)
    } else {
      setConsent(savedConsent === "true")
      setIsVisible(false)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true")
    setConsent(true)
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "false")
    setConsent(false)
    setIsVisible(false)
  }

  const openConsentDialog = useCallback(() => {
    setIsVisible(true)
  }, [])

  if (!isClient) {
    return <>{children}</>
  }

  return (
    <ConsentContext.Provider value={{ consent, openConsentDialog }}>
      {children}
      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-300">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="p-4 md:p-6">
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex h-10 w-10 rounded-full bg-[#ED1C24]/10 items-center justify-center flex-shrink-0">
                  <Cookie className="h-5 w-5 text-[#ED1C24]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Utilizamos cookies
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Usamos cookies propias y de terceros para analizar el tráfico de nuestra web 
                        y mejorar tu experiencia de navegación. Puedes aceptar todas las cookies, 
                        rechazarlas o configurar tus preferencias. Más información en nuestra{" "}
                        <Link href="/cookies" className="text-[#ED1C24] hover:underline">
                          Política de Cookies
                        </Link>.
                      </p>
                    </div>
                    <button
                      onClick={handleReject}
                      className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
                      aria-label="Cerrar"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <Button
                      onClick={handleAccept}
                      className="bg-[#ED1C24] hover:bg-[#C41922] text-white"
                    >
                      Aceptar todas
                    </Button>
                    <Button
                      onClick={handleReject}
                      variant="outline"
                      className="border-gray-300"
                    >
                      Rechazar opcionales
                    </Button>
                    <Link href="/cookies">
                      <Button variant="ghost" className="text-gray-600 w-full sm:w-auto">
                        Más información
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </ConsentContext.Provider>
  )
}
