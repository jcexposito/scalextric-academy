import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de cookies de Scalextric Academy. Información sobre el uso de cookies en nuestro sitio web.",
}

export default function CookiesPage() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-gray">
          <h1>Política de Cookies</h1>
          <p className="lead">
            Última actualización: Abril 2026
          </p>

          <h2>1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en su 
            dispositivo cuando visita un sitio web. Sirven para recordar sus 
            preferencias y mejorar su experiencia de navegación.
          </p>

          <h2>2. Tipos de cookies que utilizamos</h2>
          
          <h3>Cookies técnicas (necesarias)</h3>
          <p>
            Son esenciales para el funcionamiento del sitio web. Permiten la 
            navegación y el uso de las funciones básicas.
          </p>

          <h3>Cookies de análisis</h3>
          <p>
            Utilizamos Google Analytics para recopilar información anónima sobre 
            cómo los usuarios interactúan con nuestro sitio web. Esto nos ayuda 
            a mejorar nuestros servicios.
          </p>
          <p>Datos recopilados:</p>
          <ul>
            <li>Páginas visitadas</li>
            <li>Tiempo de permanencia</li>
            <li>Origen del tráfico</li>
            <li>Tipo de dispositivo y navegador</li>
          </ul>

          <h2>3. Gestión de cookies</h2>
          <p>
            Al acceder a nuestro sitio web por primera vez, se le mostrará un 
            banner informativo donde podrá aceptar o rechazar las cookies 
            opcionales.
          </p>
          <p>
            Puede cambiar sus preferencias en cualquier momento haciendo clic 
            en el enlace &quot;Cambiar preferencias de cookies&quot; situado en el pie 
            de página.
          </p>

          <h2>4. Cómo desactivar las cookies</h2>
          <p>
            También puede configurar su navegador para bloquear o eliminar las 
            cookies. A continuación, le indicamos cómo hacerlo en los navegadores 
            más comunes:
          </p>
          <ul>
            <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
            <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
            <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
            <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio</li>
          </ul>

          <h2>5. Cookies de terceros</h2>
          <p>
            Las cookies de Google Analytics son gestionadas por Google LLC. Puede 
            obtener más información sobre su política de privacidad en:{" "}
            <a 
              href="https://policies.google.com/privacy" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              https://policies.google.com/privacy
            </a>
          </p>

          <h2>6. Actualización de la política</h2>
          <p>
            Esta política de cookies puede ser modificada para adaptarse a cambios 
            legislativos o a nuevas funcionalidades del sitio web. Le recomendamos 
            revisarla periódicamente.
          </p>
        </div>
      </div>
    </div>
  )
}
