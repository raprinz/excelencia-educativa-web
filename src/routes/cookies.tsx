import { createFileRoute } from "@tanstack/react-router";
import { LegalDocument, LegalList } from "@/components/legal-document";
import { canonicalLink, pageSocialMeta } from "@/lib/seo";

const title = "Política de cookies y almacenamiento local";
const description =
  "Información sobre cookies y almacenamiento local utilizado por el sitio de Excelencia Educativa.";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: `${title} · Excelencia Educativa` },
      { name: "description", content: description },
      ...pageSocialMeta("/cookies", title, description),
    ],
    links: [canonicalLink("/cookies")],
  }),
  component: Page,
});

function Page() {
  return (
    <LegalDocument
      eyebrow="Cookies"
      title={title}
      intro="Te contamos qué información guarda el navegador para que funcionen algunas opciones del sitio y cómo puedes borrarla."
      sections={[
        {
          title: "1. Qué son las cookies y el almacenamiento local",
          content: (
            <p>
              Las cookies son pequeños archivos que un sitio puede guardar en el navegador. El
              almacenamiento local (localStorage) es una función distinta del navegador que guarda
              datos en el dispositivo. Esta política describe ambos mecanismos para que sepas qué
              usa el sitio.
            </p>
          ),
        },
        {
          title: "2. Qué utiliza este sitio",
          content: (
            <LegalList>
              <li>
                <strong className="text-foreground">Cotización del catálogo:</strong> la clave
                localStorage <code>excelencia-educativa-cotizacion</code> guarda los códigos y
                cantidades de los libros seleccionados para que la cotización siga disponible al
                cambiar de página. Se conserva en el dispositivo hasta que vacíes la cotización o
                borres los datos del navegador.
              </li>
              <li>
                <strong className="text-foreground">Elección del aviso:</strong> la clave
                localStorage <code>ee-cookie-choice-v1</code> conserva durante 12 meses tu elección
                del aviso de cookies. No contiene tu nombre ni se usa para rastrearte.
              </li>
              <li>
                <strong className="text-foreground">Seguridad de Cloudflare:</strong> según la
                configuración activa, Cloudflare puede establecer cookies técnicas para proteger el
                sitio, como <code>__cf_bm</code> si está habilitada su protección contra bots. Esa
                cookie dura hasta 30 minutos de inactividad. La activación y otras cookies dependen
                de las opciones de seguridad configuradas para el dominio; no se usan aquí para
                publicidad. Consulta la{" "}
                <a
                  className="text-brand underline"
                  href="https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/"
                  target="_blank"
                  rel="noreferrer"
                >
                  documentación de cookies de Cloudflare
                </a>
                .
              </li>
            </LegalList>
          ),
        },
        {
          title: "3. Analítica y publicidad",
          content: (
            <p>
              En el código actual del sitio no se han integrado cookies de analítica, publicidad,
              redes publicitarias ni seguimiento entre sitios. Si en el futuro se incorporan
              tecnologías opcionales que traten datos personales, esta política se actualizará y se
              solicitará una elección previa antes de activarlas.
            </p>
          ),
        },
        {
          title: "4. Infraestructura y servicios externos",
          content: (
            <p>
              El alojamiento y la capa de seguridad de red pueden procesar datos técnicos
              indispensables para entregar el sitio y protegerlo. Servicios externos como WhatsApp o
              la herramienta de agenda aplican sus propias tecnologías y políticas cuando decides
              abrirlos. Consulta la información de esos proveedores antes de enviarles datos.
            </p>
          ),
        },
        {
          title: "5. Cómo cambiar tu elección o borrar datos",
          content: (
            <>
              <p>
                Puedes borrar los datos del sitio desde las opciones de privacidad o almacenamiento
                de tu navegador. Al hacerlo, también se eliminará la lista de cotización guardada en
                ese dispositivo. Para que el aviso vuelva a aparecer, borra la clave{" "}
                <code>ee-cookie-choice-v1</code> del almacenamiento local del navegador.
              </p>
              <p>
                El aviso muestra una elección explícita entre aceptar y mantener solo lo necesario.
                Continuar navegando no se interpreta por sí solo como aceptación. Actualmente el
                sitio solo utiliza almacenamiento necesario para las funciones descritas arriba; por
                ello, ambas elecciones mantienen desactivadas las tecnologías opcionales.
              </p>
              <p>
                Para ejercer derechos sobre datos personales, consulta nuestra
                <a className="ml-1 text-brand underline" href="/privacidad">
                  Política de privacidad
                </a>{" "}
                o escribe a administracion@excelenciaeducativa.co.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
