import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Car } from "lucide-react"

const files = [
  {
    name: "Ford Escort Cosworth",
    filename: "ford-escort-cosworth.stl",
    description: "Modelo base para impresión 3D del chasis/carrocería.",
  },
  {
    name: "Seat 850",
    filename: "seat-850.stl",
    description: "Modelo base para impresión 3D de vehículo clásico.",
  },
]

export default function DescargasPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Descargas</h1>
        <p className="text-gray-600 mt-1">
          Recursos 3D para trabajar en diseño, impresión y personalización de coches.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {files.map((file) => (
          <Card key={file.filename} className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Car className="h-5 w-5 text-[#ED1C24]" />
                {file.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">{file.description}</p>
              <p className="text-xs text-gray-500 font-mono bg-gray-50 p-2 rounded">
                {file.filename}
              </p>
              <a href={`/downloads/${file.filename}`} download>
                <Button className="w-full bg-[#ED1C24] hover:bg-[#C41922] text-white gap-2">
                  <Download className="h-4 w-4" />
                  Descargar STL
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
