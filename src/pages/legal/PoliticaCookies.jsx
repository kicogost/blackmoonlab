import LegalPage, { Section, P, Ul } from '../../components/LegalPage.jsx'
import { CLIENT } from '../../config/client.js'

export default function PoliticaCookies() {
  return (
    <LegalPage title="Política de Cookies">
      <Section title="1. ¿Qué son las cookies?">
        <P>
          Una cookie es un pequeño archivo de texto que un sitio web guarda en tu dispositivo cuando lo visitas. Sirven para recordar información sobre tu visita y mejorar la experiencia de navegación.
        </P>
      </Section>

      <Section title="2. Cookies que utilizamos">
        <P>
          En {`https://${CLIENT.domain}`} utilizamos las siguientes categorías de cookies:
        </P>
        <Ul items={[
          'Cookies técnicas propias: imprescindibles para el funcionamiento del sitio y el recuerdo de tu preferencia sobre el banner de cookies.',
          'Cookies analíticas (opcionales): nos permiten medir de forma agregada la actividad del sitio para mejorarlo. Solo se activan si aceptas el banner.',
        ]} />
      </Section>

      <Section title="3. Gestión del consentimiento">
        <P>
          Al entrar en el Sitio Web verás un banner que te permite aceptar o rechazar las cookies no técnicas. Puedes cambiar tu elección en cualquier momento borrando las cookies desde la configuración de tu navegador y volviendo a cargar la página.
        </P>
      </Section>

      <Section title="4. Cómo deshabilitar las cookies">
        <P>
          Puedes configurar tu navegador para aceptar, rechazar o eliminar cookies. A continuación tienes enlaces a las guías oficiales de los principales navegadores:
        </P>
        <Ul items={[
          'Google Chrome: support.google.com/chrome/answer/95647',
          'Mozilla Firefox: support.mozilla.org',
          'Safari: support.apple.com',
          'Microsoft Edge: support.microsoft.com',
        ]} />
      </Section>

      <Section title="5. Contacto">
        <P>
          Si tienes dudas sobre esta política, escríbenos a {CLIENT.email}.
        </P>
      </Section>
    </LegalPage>
  )
}
