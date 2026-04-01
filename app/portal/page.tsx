import type { Metadata } from "next"
import { LoginForm } from "@/components/login-form"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Portal del Alumno",
  description: "Accede al portal de Scalextric Academy para ver tu progreso, notas y calendario de clases.",
}

export default function PortalPage() {
  return (
    <section className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <Image
              src="/logo-academy.png"
              alt="Scalextric Academy"
              width={200}
              height={56}
              className="h-14 w-auto mx-auto mb-6 brightness-0 invert"
            />
            <h1 className="text-2xl font-bold text-white mb-2">
              Portal del Alumno
            </h1>
            <p className="text-gray-400">
              Accede para ver tu progreso y calendario
            </p>
          </div>

          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <LoginForm />
            </CardContent>
          </Card>

          <p className="text-center text-gray-500 text-sm mt-6">
            Demo: usuario <code className="bg-gray-800 px-2 py-1 rounded text-gray-300">demo</code> / 
            contraseña <code className="bg-gray-800 px-2 py-1 rounded text-gray-300">demo</code>
          </p>
        </div>
      </div>
    </section>
  )
}
