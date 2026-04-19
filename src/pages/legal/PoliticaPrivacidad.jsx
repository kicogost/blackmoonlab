import LegalPage, { Section, P, Ul } from '../../components/LegalPage.jsx'
import { CLIENT } from '../../config/client.js'

export default function PoliticaPrivacidad() {
  return (
    <LegalPage title="Política de Privacidad">
      <Section title="1. Responsable del tratamiento">
        <Ul items={[
          `Identidad: ${CLIENT.legalName}`,
          `NIF: ${CLIENT.nif}`,
          `Correo electrónico: ${CLIENT.email}`,
          `Sitio web: https://${CLIENT.domain}`,
        ]} />
      </Section>

      <Section title="2. Finalidad del tratamiento">
        <P>
          Tratamos los datos personales que nos facilitas con las siguientes finalidades:
        </P>
        <Ul items={[
          'Gestionar tu membresía o relación contractual con Black Moon Lab.',
          'Responder a las consultas que nos envíes por email o redes sociales.',
          'Enviarte comunicaciones relacionadas con el servicio que has contratado.',
          'Cumplir con las obligaciones legales que sean aplicables.',
        ]} />
      </Section>

      <Section title="3. Base legal">
        <P>
          La base legal para el tratamiento de tus datos es el consentimiento que nos otorgas al contactarnos o contratar nuestros servicios, así como la ejecución de la relación contractual y el cumplimiento de obligaciones legales.
        </P>
      </Section>

      <Section title="4. Conservación de los datos">
        <P>
          Tus datos se conservarán mientras mantengamos una relación contractual o comercial, y posteriormente durante los plazos legales exigidos para atender responsabilidades derivadas del tratamiento.
        </P>
      </Section>

      <Section title="5. Destinatarios">
        <P>
          No cedemos tus datos a terceros, salvo obligación legal o salvo aquellos proveedores de servicios necesarios para la prestación de Black Moon Lab (plataforma de pago Stan.store, servicios de email marketing, hosting). Todos ellos cumplen con el RGPD.
        </P>
      </Section>

      <Section title="6. Derechos del usuario">
        <P>
          Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiéndonos a {CLIENT.email}. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).
        </P>
      </Section>

      <Section title="7. Seguridad">
        <P>
          Aplicamos las medidas técnicas y organizativas necesarias para garantizar la seguridad e integridad de tus datos personales y evitar su pérdida, alteración o acceso no autorizado.
        </P>
      </Section>
    </LegalPage>
  )
}
