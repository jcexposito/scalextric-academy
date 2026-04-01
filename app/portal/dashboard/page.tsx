import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Trophy, 
  Calendar, 
  TrendingUp,
  Users,
  Clock
} from "lucide-react"

const stats = [
  { label: "Posición en ranking", value: "3.º", icon: Trophy, change: "+2" },
  { label: "Sesiones completadas", value: "12", icon: Calendar, change: "" },
  { label: "Puntuación media", value: "8.5", icon: TrendingUp, change: "+0.3" },
  { label: "Miembros del equipo", value: "5", icon: Users, change: "" },
]

const recentActivities = [
  { date: "28 Mar", activity: "Carrera de clasificación", result: "2.º puesto" },
  { date: "25 Mar", activity: "Prueba de velocidad", result: "Mejor tiempo: 12.3s" },
  { date: "21 Mar", activity: "Entrega diseño CAD", result: "Aprobado" },
  { date: "18 Mar", activity: "Sesión de montaje", result: "Completada" },
]

const upcomingEvents = [
  { date: "5 Abr", event: "Carrera eliminatoria", time: "10:00" },
  { date: "12 Abr", event: "Presentación del proyecto", time: "11:30" },
  { date: "19 Abr", event: "Final local", time: "09:00" },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          ¡Hola, Demo Alumno!
        </h1>
        <p className="text-gray-600 mt-1">
          Bienvenido al portal de Scalextric Academy. Aquí tienes un resumen de tu progreso.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">
                    {stat.value}
                  </p>
                  {stat.change && (
                    <Badge className="mt-2 bg-green-100 text-green-700">
                      {stat.change}
                    </Badge>
                  )}
                </div>
                <div className="h-12 w-12 rounded-lg bg-[#ED1C24]/10 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-[#ED1C24]" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg">Actividad reciente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between py-3 border-b last:border-0"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500 w-16">{activity.date}</span>
                    <span className="text-gray-900">{activity.activity}</span>
                  </div>
                  <Badge variant="outline">{activity.result}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg">Próximos eventos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="h-12 w-12 rounded-lg bg-[#ED1C24] text-white flex flex-col items-center justify-center text-center">
                    <span className="text-xs">ABR</span>
                    <span className="text-lg font-bold leading-none">{event.date.split(" ")[0]}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{event.event}</p>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {event.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
