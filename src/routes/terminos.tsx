import { createFileRoute } from "@tanstack/react-router";
import { LegalDocument, LegalList } from "@/components/legal-document";
import { canonicalLink, pageSocialMeta } from "@/lib/seo";

const title = "Términos y condiciones de uso";
const description =
  "Reglas de uso del sitio web, catálogo y servicios educativos digitales de Excelencia Educativa.";

export const Route = createFileRoute("/terminos")({
  head: () => ({
    meta: [
      { title: `${title} · Excelencia Educativa` },
      { name: "description", content: description },
      ...pageSocialMeta("/terminos", title, description),
    ],
    links: [canonicalLink("/terminos")],
  }),
  component: Page,
});

function Page() {
  return (
    <LegalDocument
      eyebrow="Condiciones de uso"
      title={title}
      intro="Al utilizar excelenciaeducativa.co aceptas estas condiciones de uso. Las funciones de la plataforma educativa pueden tener condiciones complementarias antes de habilitar una cuenta."
      sections={[
        {
          title: "1. Titular del sitio y alcance",
          content: (
            <p>
              El sitio es administrado por EXCELENCIA EDUCATIVA S.A.S. (NIT 900.442.298-9), con
              domicilio en Barranquilla, Colombia. Ofrece información institucional, contenidos
              editoriales, catálogo de libros y canales para solicitar información o cotizaciones.
              La cotización no constituye por sí sola una compra, reserva ni aceptación de precio o
              disponibilidad: esos términos se confirmarán directamente con el equipo comercial.
            </p>
          ),
        },
        {
          title: "2. Uso permitido",
          content: (
            <>
              <p>Te comprometes a utilizar el sitio de forma lícita y respetuosa. No debes:</p>
              <LegalList>
                <li>interferir con la seguridad o disponibilidad del sitio;</li>
                <li>
                  usar formularios, contenidos o cuentas para suplantar a otra persona o vulnerar
                  derechos;
                </li>
                <li>
                  copiar, redistribuir o explotar comercialmente contenidos protegidos sin
                  autorización;
                </li>
                <li>compartir credenciales o intentar acceder a cuentas ajenas.</li>
              </LegalList>
            </>
          ),
        },
        {
          title: "3. Menores de edad y cuentas educativas",
          content: (
            <p>
              Los menores deben usar los servicios educativos con conocimiento y autorización previa
              de su padre, madre o representante legal. El adulto debe revisar las condiciones y la
              Política de privacidad, autorizar el tratamiento de los datos necesarios y acompañar
              el uso de la cuenta. El menor debe recibir información comprensible y su opinión se
              tendrá en cuenta según su edad y madurez. No se debe crear una cuenta para un menor
              sin dicha autorización. Cuando la plataforma educativa habilite registro, las
              instrucciones y condiciones específicas se mostrarán en ese servicio antes de usarlo.
            </p>
          ),
        },
        {
          title: "4. Cuentas, contenidos y progreso",
          content: (
            <p>
              Las credenciales son personales y deben mantenerse seguras. Los servicios educativos
              pueden asociar a una cuenta el libro correspondiente y el avance de las actividades
              relacionadas. El usuario o su representante puede solicitar la actualización o
              eliminación de la cuenta y de esos datos mediante los canales descritos en la Política
              de privacidad, sujeto a las obligaciones legales que deban cumplirse.
            </p>
          ),
        },
        {
          title: "5. Propiedad intelectual",
          content: (
            <p>
              Las marcas, libros, ilustraciones, textos, diseños, software y demás contenidos del
              sitio pertenecen a Excelencia Educativa o a sus respectivos titulares. El acceso al
              sitio no transfiere derechos de propiedad intelectual. Se permite consultar y usar el
              sitio para fines personales, educativos o institucionales legítimos, respetando las
              licencias y autorizaciones correspondientes.
            </p>
          ),
        },
        {
          title: "6. Enlaces y disponibilidad",
          content: (
            <p>
              Algunas acciones pueden abrir servicios externos, como correo electrónico, WhatsApp o
              herramientas de agenda. Esos servicios tienen sus propias condiciones y políticas.
              Procuramos mantener el sitio disponible y actualizado, pero algunas funciones pueden
              cambiar, interrumpirse o depender de proveedores externos.
            </p>
          ),
        },
        {
          title: "7. Privacidad, cambios y legislación",
          content: (
            <p>
              El tratamiento de datos personales se rige por la{" "}
              <a className="text-brand underline" href="/privacidad">
                Política de privacidad
              </a>{" "}
              y el almacenamiento del navegador por la{" "}
              <a className="text-brand underline" href="/cookies">
                Política de cookies
              </a>
              . Podemos actualizar estos términos para reflejar cambios legales o de servicio; la
              versión vigente estará publicada aquí. Estas condiciones se rigen por las leyes de
              Colombia.
            </p>
          ),
        },
        {
          title: "8. Contacto",
          content: (
            <p>
              Para preguntas relacionadas con estos términos, escribe a
              administracion@excelenciaeducativa.co o llama al +57 324 235 5121.
            </p>
          ),
        },
      ]}
    />
  );
}
