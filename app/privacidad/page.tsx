import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de Scalextric Academy. Información sobre el tratamiento de datos personales.",
}

export default function PrivacidadPage() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-gray">
          <h1>Política de Privacidad</h1>
          <p className="lead">
            Última actualización: Abril 2026
          </p>

          <h2>1. Responsable del tratamiento</h2>
          <p>
            Scalextric Academy es responsable del tratamiento de los datos personales 
            recogidos a través de este sitio web.
          </p>

          <h2>2. Datos que recopilamos</h2>
          <p>Podemos recopilar los siguientes datos personales:</p>
          <ul>
            <li>Nombre y apellidos</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Nombre de la organización o centro educativo</li>
            <li>Perfil profesional</li>
          </ul>

          <h2>3. Finalidad del tratamiento</h2>
          <p>Los datos personales serán utilizados para:</p>
          <ul>
            <li>Gestionar las solicitudes de información</li>
            <li>Enviar información sobre el programa educativo</li>
            <li>Contactar para programar sesiones o eventos</li>
            <li>Mejorar nuestros servicios</li>
          </ul>

          <h2>4. Base legal</h2>
          <p>
            El tratamiento de sus datos se basa en el consentimiento expreso que nos 
            otorga al rellenar nuestros formularios y aceptar esta política.
          </p>

          <h2>5. Conservación de datos</h2>
          <p>
            Los datos personales se conservarán mientras sean necesarios para la 
            finalidad para la que fueron recogidos y durante el tiempo que la 
            legislación vigente establezca.
          </p>

          <h2>6. Derechos del usuario</h2>
          <p>Puede ejercer sus derechos de:</p>
          <ul>
            <li>Acceso a sus datos personales</li>
            <li>Rectificación de datos inexactos</li>
            <li>Supresión de sus datos</li>
            <li>Oposición al tratamiento</li>
            <li>Portabilidad de los datos</li>
            <li>Limitación del tratamiento</li>
          </ul>

          <h2>7. Seguridad</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas para proteger 
            sus datos personales contra el acceso no autorizado, la alteración, 
            divulgación o destrucción.
          </p>

          <h2>8. Cambios en la política</h2>
          <p>
            Nos reservamos el derecho de modificar esta política de privacidad. 
            Los cambios serán publicados en esta página.
          </p>
        </div>
      </div>
    </div>
  )
}
