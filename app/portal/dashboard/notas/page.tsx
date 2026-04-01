import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const grades = [
  { 
    subject: "Diseño CAD", 
    grade: 9.0, 
    status: "Completado",
    feedback: "Excelente trabajo en el modelado 3D del vehículo."
  },
  { 
    subject: "Construcción", 
    grade: 8.5, 
    status: "Completado",
    feedback: "Buen acabado y precisión en el montaje."
  },
  { 
    subject: "Pruebas y optimización", 
    grade: 8.0, 
    status: "Completado",
    feedback: "Buena metodología de análisis de datos."
  },
  { 
    subject: "Trabajo en equipo", 
    grade: 9.5, 
    status: "Completado",
    feedback: "Excelente colaboración y comunicación."
  },
  { 
    subject: "Documentación técnica", 
    grade: null, 
    status: "Pendiente",
    feedback: "Entrega prevista: 12 de abril"
  },
  { 
    subject: "Presentación final", 
    grade: null, 
    status: "Pendiente",
    feedback: "Programada para el 19 de abril"
  },
]

const competencies = [
  { name: "Pensamiento crítico", progress: 85 },
  { name: "Creatividad", progress: 90 },
  { name: "Colaboración", progress: 95 },
  { name: "Comunicación", progress: 75 },
  { name: "Resolución de problemas", progress: 88 },
]

export default function NotasPage() {
  const completedGrades = grades.filter(g => g.grade !== null)
  const averageGrade = completedGrades.length > 0 
    ? (completedGrades.reduce((acc, g) => acc + (g.grade || 0), 0) / completedGrades.length).toFixed(1)
    : "-"

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Mis Notas</h1>
        <p className="text-gray-600 mt-1">
          Consulta tus calificaciones y evaluación de competencias.
        </p>
      </div>

      {/* Summary */}
      <div className="grid sm:grid-cols-3 gap-6">
        <Card className="border-0 shadow-md bg-[#ED1C24] text-white">
          <CardContent className="p-6 text-center">
            <p className="text-white/80 text-sm">Nota media</p>
            <p className="text-4xl font-bold mt-1">{averageGrade}</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-md">
          <CardContent className="p-6 text-center">
            <p className="text-gray-500 text-sm">Evaluaciones completadas</p>
            <p className="text-4xl font-bold text-gray-900 mt-1">
              {completedGrades.length}/{grades.length}
            </p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-md">
          <CardContent className="p-6 text-center">
            <p className="text-gray-500 text-sm">Mejor calificación</p>
            <p className="text-4xl font-bold text-gray-900 mt-1">
              {Math.max(...completedGrades.map(g => g.grade || 0))}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Grades Table */}
        <Card className="border-0 shadow-md lg:col-span-2">
          <CardHeader>
            <CardTitle>Calificaciones por módulo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {grades.map((item) => (
                <div 
                  key={item.subject}
                  className="p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-medium text-gray-900">{item.subject}</h3>
                      <p className="text-sm text-gray-500">{item.feedback}</p>
                    </div>
                    <div className="text-right">
                      {item.grade !== null ? (
                        <span className="text-2xl font-bold text-gray-900">
                          {item.grade}
                        </span>
                      ) : (
                        <Badge variant="outline">{item.status}</Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Competencies */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>Competencias</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {competencies.map((comp) => (
                <div key={comp.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-700">{comp.name}</span>
                    <span className="text-sm font-medium text-gray-900">{comp.progress}%</span>
                  </div>
                  <Progress value={comp.progress} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
