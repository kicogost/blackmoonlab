import LegalPage, { Section, P, Ul } from '../../components/LegalPage.jsx'
import { CLIENT } from '../../config/client.js'

export default function DeclaracionAccesibilidad() {
  return (
    <LegalPage title="Declaración de Accesibilidad">
      <Section title="1. Compromiso de accesibilidad">
        <P>
          {CLIENT.legalName} se compromete a hacer su sitio web accesible, de conformidad con el Real Decreto 1112/2018, de 7 de septiembre, sobre accesibilidad de los sitios web y aplicaciones para dispositivos móviles del sector público.
        </P>
        <P>
          La presente declaración de accesibilidad se aplica al sitio web {`https://${CLIENT.domain}`}.
        </P>
      </Section>

      <Section title="2. Situación de cumplimiento">
        <P>
          Este sitio web es parcialmente conforme con los requisitos de accesibilidad web de nivel AA de las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1, debido a que puede haber casos puntuales en los que algunos elementos no cumplan completamente con todos los criterios.
        </P>
      </Section>

      <Section title="3. Preparación de la declaración">
        <P>
          Esta declaración fue preparada en base a una autoevaluación del sitio web, revisando la estructura HTML, los contrastes de color, la navegación por teclado y el uso de texto alternativo en imágenes.
        </P>
      </Section>

      <Section title="4. Observaciones y datos de contacto">
        <P>
          Si detectas algún problema de accesibilidad en este sitio o necesitas recibir información en un formato accesible, puedes contactar por correo electrónico en {CLIENT.email}.
        </P>
      </Section>

      <Section title="5. Procedimiento de aplicación">
        <P>
          En caso de que, tras haber realizado una comunicación, consideres que no ha sido atendida adecuadamente, puedes dirigirte a la unidad responsable de accesibilidad competente.
        </P>
      </Section>
    </LegalPage>
  )
}
