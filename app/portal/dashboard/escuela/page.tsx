import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, MapPin, UploadCloud } from "lucide-react"

const teamMembers = [
  { name: "Demo Alumno", role: "Piloto", avatar: "DA" },
  { name: "María García", role: "Jefe de equipo", avatar: "MG" },
  { name: "Carlos López", role: "Ingeniero", avatar: "CL" },
  { name: "Ana Martínez", role: "Diseñadora", avatar: "AM" },
  { name: "Pedro Sánchez", role: "Analista de datos", avatar: "PS" },
]

export default function EscuelaPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Mi Escuela</h1>
        <p className="text-gray-600 mt-1">
          Información de tu centro y escudería.
        </p>
      </div>

      {/* School Info */}
      <Card className="border-0 shadow-md">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="h-20 w-20 rounded-xl bg-[#ED1C24] flex items-center justify-center text-white text-2xl font-bold">
              IES
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900">
                IES Ejemplo Madrid
              </h2>
              <p className="text-gray-600 flex items-center gap-2 mt-1">
                <MapPin className="h-4 w-4" />
                Madrid, España
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <Badge>Curso 2025-2026</Badge>
                <Badge variant="outline">4.º ESO</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Team Info */}
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="border-0 shadow-md lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-[#ED1C24]" />
              Escudería Racing - Miembros del equipo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              {teamMembers.map((member) => (
                <div 
                  key={member.name}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="h-12 w-12 rounded-full bg-[#ED1C24] flex items-center justify-center text-white font-semibold">
                    {member.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{member.name}</p>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UploadCloud className="h-5 w-5 text-[#ED1C24]" />
              Multimedia
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center bg-gray-50">
              <UploadCloud className="h-10 w-10 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-700 font-medium mb-2">Subir imágenes</p>
              <p className="text-sm text-gray-500 mb-4">
                Arrastra aquí tus archivos o pulsa para seleccionar.
              </p>
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-[#ED1C24] px-4 py-2 text-sm font-medium text-white hover:bg-[#C41922]"
              >
                Subir y Arrastrar
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
