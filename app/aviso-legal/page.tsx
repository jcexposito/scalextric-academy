import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal y condiciones de uso del sitio web de Scalextric Academy.",
}

export default function AvisoLegalPage() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-gray">
          <h1>Aviso Legal</h1>
          <p className="lead">
            Última actualización: Abril 2026
          </p>

          <h2>1. Identificación</h2>
          <p>
            El presente sitio web es propiedad de Scalextric Academy, un proyecto 
            educativo dedicado a la formación STEM mediante el uso de tecnología 
            de slot cars.
          </p>

          <h2>2. Condiciones de uso</h2>
          <p>
            El acceso y uso de este sitio web atribuye la condición de usuario e 
            implica la aceptación plena de todas las condiciones incluidas en este 
            Aviso Legal.
          </p>

          <h2>3. Propiedad intelectual</h2>
          <p>
            Todos los contenidos del sitio web, incluyendo textos, fotografías, 
            gráficos, imágenes, iconos, tecnología, software, así como su diseño 
            gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece 
            a Scalextric Academy.
          </p>
          <p>
            Scalextric es una marca registrada. Su uso en este contexto es 
            exclusivamente educativo y está autorizado para el programa 
            Scalextric Academy.
          </p>

          <h2>4. Exclusión de responsabilidad</h2>
          <p>
            Scalextric Academy no se hace responsable de los daños y perjuicios 
            que pudieran derivarse de:
          </p>
          <ul>
            <li>Interferencias, omisiones, interrupciones, virus informáticos o averías</li>
            <li>Uso inadecuado del sitio web</li>
            <li>Errores de seguridad o navegación</li>
          </ul>

          <h2>5. Enlaces externos</h2>
          <p>
            Este sitio web puede contener enlaces a sitios de terceros. Scalextric 
            Academy no asume ninguna responsabilidad por el contenido de dichos sitios.
          </p>

          <h2>6. Legislación aplicable</h2>
          <p>
            El presente Aviso Legal se rige por la legislación española. Para 
            cualquier controversia que pudiera derivarse del acceso o uso de este 
            sitio web, las partes se someten a los Juzgados y Tribunales del 
            domicilio del usuario.
          </p>
        </div>
      </div>
    </div>
  )
}
