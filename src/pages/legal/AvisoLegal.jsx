import LegalPage, { Section, P, Ul } from '../../components/LegalPage.jsx'
import { CLIENT } from '../../config/client.js'

export default function AvisoLegal() {
  return (
    <LegalPage title="Aviso Legal">
      <Section title="1. Datos identificativos">
        <P>
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), se informa:
        </P>
        <Ul items={[
          `Titular: ${CLIENT.legalName}`,
          `NIF: ${CLIENT.nif}`,
          `Actividad: ${CLIENT.description}`,
          `Correo electrónico: ${CLIENT.email}`,
          `Sitio web: https://${CLIENT.domain}`,
        ]} />
      </Section>

      <Section title="2. Objeto">
        <P>
          El presente Aviso Legal regula el uso del sitio web {`https://${CLIENT.domain}`} (en adelante, "el Sitio Web"). La navegación por el Sitio Web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal.
        </P>
      </Section>

      <Section title="3. Condiciones de uso">
        <P>
          El usuario se compromete a hacer un uso adecuado y lícito del Sitio Web y de los contenidos, de conformidad con la legislación aplicable, el presente Aviso Legal, la moral y las buenas costumbres generalmente aceptadas y el orden público.
        </P>
        <P>
          Queda prohibido cualquier uso del Sitio Web con fines ilícitos o que pueda perjudicar o impedir el normal funcionamiento del mismo o de los servicios accesibles.
        </P>
      </Section>

      <Section title="4. Propiedad intelectual e industrial">
        <P>
          Todos los contenidos del Sitio Web — textos, fotografías, gráficos, imágenes, iconos, tecnología, software, enlaces, nombres comerciales, marcas o signos distintivos — son propiedad de {CLIENT.legalName} o de terceros que han autorizado su uso. Queda expresamente prohibida su reproducción, distribución, comunicación pública, transformación o cualquier otra actividad similar sin consentimiento expreso por escrito.
        </P>
      </Section>

      <Section title="5. Exclusión de responsabilidad">
        <P>
          {CLIENT.legalName} no se hace responsable de los daños y perjuicios que pudieran derivarse de interferencias, omisiones, interrupciones, virus informáticos, averías telefónicas o desconexiones en el funcionamiento operativo del sistema electrónico, motivadas por causas ajenas.
        </P>
      </Section>

      <Section title="6. Legislación aplicable y jurisdicción">
        <P>
          El presente Aviso Legal se rige por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los Juzgados y Tribunales del domicilio del usuario, salvo que la normativa aplicable disponga otra cosa.
        </P>
      </Section>
    </LegalPage>
  )
}
