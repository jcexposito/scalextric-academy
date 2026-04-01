import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"

const events = [
  {
    date: "5 Abril 2026",
    day: "Sábado",
    events: [
      {
        time: "10:00 - 12:00",
        title: "Carrera eliminatoria",
        location: "Pista central",
        type: "Competición"
      }
    ]
  },
  {
    date: "8 Abril 2026",
    day: "Martes",
    events: [
      {
        time: "16:00 - 17:30",
        title: "Sesión de ajustes",
        location: "Taller",
        type: "Taller"
      }
    ]
  },
  {
    date: "12 Abril 2026",
    day: "Sábado",
    events: [
      {
        time: "11:30 - 13:00",
        title: "Presentación del proyecto",
        location: "Salón de actos",
        type: "Evaluación"
      }
    ]
  },
  {
    date: "15 Abril 2026",
    day: "Martes",
    events: [
      {
        time: "16:00 - 17:30",
        title: "Ensayo de carrera",
        location: "Pista central",
        type: "Práctica"
      }
    ]
  },
  {
    date: "19 Abril 2026",
    day: "Sábado",
    events: [
      {
        time: "09:00 - 14:00",
        title: "Final local",
        location: "Pista central",
        type: "Competición"
      },
      {
        time: "14:30 - 15:30",
        title: "Ceremonia de clausura",
        location: "Salón de actos",
        type: "Evento"
      }
    ]
  },
]

const eventTypeColors: Record<string, string> = {
  "Competición": "bg-red-100 text-red-700",
  "Taller": "bg-blue-100 text-blue-700",
  "Evaluación": "bg-purple-100 text-purple-700",
  "Práctica": "bg-green-100 text-green-700",
  "Evento": "bg-yellow-100 text-yellow-700",
}

export default function CalendarioPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Calendario</h1>
        <p className="text-gray-600 mt-1">
          Consulta las próximas sesiones y eventos programados.
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3">
        {Object.entries(eventTypeColors).map(([type, color]) => (
          <Badge key={type} className={color}>
            {type}
          </Badge>
        ))}
      </div>

      {/* Timeline */}
      <div className="space-y-6">
        {events.map((day) => (
          <Card key={day.date} className="border-0 shadow-md overflow-hidden">
            <CardHeader className="bg-gray-50 py-4">
              <CardTitle className="flex items-center gap-3 text-lg">
                <div className="h-10 w-10 rounded-lg bg-[#ED1C24] text-white flex items-center justify-center">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-gray-900">{day.date}</span>
                  <span className="text-gray-500 font-normal ml-2">({day.day})</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {day.events.map((event, index) => (
                <div 
                  key={index}
                  className="p-4 border-b last:border-0 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-2 text-gray-500 text-sm min-w-[140px]">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{event.title}</h3>
                      <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" />
                        {event.location}
                      </p>
                    </div>
                    <Badge className={eventTypeColors[event.type]}>
                      {event.type}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
