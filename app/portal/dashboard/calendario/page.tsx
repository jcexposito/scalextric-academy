import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, CheckCircle2 } from "lucide-react"

const phases = [
  {
    phase: 1,
    title: "Presentación del proyecto y creación de escuderías",
    week: "Semana 1 (1-7 marzo)",
    duration: "2 horas",
  },
  {
    phase: 2,
    title: "Taller de electricidad",
    week: "Semana 2 (8-14 marzo)",
    duration: "2 horas",
  },
  {
    phase: 3,
    title: "Taller de fuerzas y magnetismo",
    week: "Semana 3 (15-21 marzo)",
    duration: "2 horas",
  },
  {
    phase: 4,
    title: "Materiales y huella ecológica",
    week: "Semana 4 (22-28 marzo)",
    duration: "2 horas",
  },
  {
    phase: 5,
    title: "Roles dentro de la escudería",
    week: "Semana 5 (29 marzo - 4 abril)",
    duration: "2 horas",
  },
  {
    phase: 6,
    title: "Diseño e impresión 3D",
    week: "Semana 6 (5-11 abril)",
    duration: "2 horas",
  },
  {
    phase: 7,
    title: "Montaje y personalización del coche",
    week: "Semana 7 (12-18 abril)",
    duration: "2 horas",
  },
  {
    phase: 8,
    title: "Test en pista y presentación final",
    week: "Semana 8 (19-25 abril)",
    duration: "2 horas",
  },
]

const currentPhase = 3
const progress = Math.round((currentPhase / phases.length) * 100)

export default function CalendarioPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Calendario</h1>
        <p className="text-gray-600 mt-1">
          Cronograma del curso por fases (1 semana por fase, 2 horas por sesión).
        </p>
      </div>

      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle className="text-lg">Progreso del curso</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-gray-700">
              Estado actual: <span className="font-semibold text-gray-900">Fase {currentPhase} de {phases.length}</span>
            </p>
            <Badge className="bg-[#ED1C24]/10 text-[#ED1C24]">{progress}%</Badge>
          </div>
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#ED1C24] rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Cronograma */}
      <div className="space-y-6">
        {phases.map((item) => {
          const isDone = item.phase < currentPhase
          const isCurrent = item.phase === currentPhase
          return (
          <Card key={item.phase} className="border-0 shadow-md overflow-hidden">
            <CardHeader className={`py-4 ${isCurrent ? "bg-[#ED1C24]/5" : "bg-gray-50"}`}>
              <CardTitle className="flex items-center gap-3 text-lg">
                <div className={`h-10 w-10 rounded-lg text-white flex items-center justify-center ${
                  isDone ? "bg-green-600" : isCurrent ? "bg-[#ED1C24]" : "bg-gray-400"
                }`}>
                  {isDone ? <CheckCircle2 className="h-5 w-5" /> : <Calendar className="h-5 w-5" />}
                </div>
                <div>
                  <span className="text-gray-900">Fase {item.phase}</span>
                  {isCurrent ? (
                    <Badge className="ml-2 bg-[#ED1C24] text-white">En curso</Badge>
                  ) : null}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-2 text-gray-500 text-sm min-w-[180px]">
                  <Clock className="h-4 w-4" />
                  {item.duration}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.week}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          )
        })}
      </div>
    </div>
  )
}
