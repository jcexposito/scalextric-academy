import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, MapPin, Trophy } from "lucide-react"

const teamMembers = [
  { name: "Demo Alumno", role: "Piloto", avatar: "DA" },
  { name: "María García", role: "Jefe de equipo", avatar: "MG" },
  { name: "Carlos López", role: "Ingeniero", avatar: "CL" },
  { name: "Ana Martínez", role: "Diseñadora", avatar: "AM" },
  { name: "Pedro Sánchez", role: "Analista de datos", avatar: "PS" },
]

const teamStats = [
  { label: "Carreras disputadas", value: "8" },
  { label: "Victorias", value: "3" },
  { label: "Podios", value: "6" },
  { label: "Mejor tiempo", value: "11.8s" },
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
              <Trophy className="h-5 w-5 text-[#ED1C24]" />
              Estadísticas del equipo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teamStats.map((stat) => (
                <div 
                  key={stat.label}
                  className="flex items-center justify-between py-2 border-b last:border-0"
                >
                  <span className="text-gray-600">{stat.label}</span>
                  <span className="font-bold text-gray-900">{stat.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
