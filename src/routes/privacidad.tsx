import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalDocument, LegalList } from "@/components/legal-document";
import { canonicalLink, pageSocialMeta } from "@/lib/seo";

const title = "Política de privacidad y tratamiento de datos";
const description =
  "Conoce cómo Excelencia Educativa trata los datos personales en su sitio web y en los servicios educativos digitales asociados.";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: `${title} · Excelencia Educativa` },
      { name: "description", content: description },
      ...pageSocialMeta("/privacidad", title, description),
    ],
    links: [canonicalLink("/privacidad")],
  }),
  component: Page,
});

function Page() {
  return (
    <LegalDocument
      eyebrow="Privacidad"
      title={title}
      intro="Esta política explica qué información se utiliza, para qué se utiliza y cómo ejercer los derechos de protección de datos en los servicios de Excelencia Educativa."
      sections={[
        {
          title: "1. Responsable y canales de contacto",
          content: (
            <>
              <p>
                El responsable del tratamiento es EXCELENCIA EDUCATIVA S.A.S., identificada con NIT
                900.442.298-9, con domicilio en Barranquilla, Colombia. Puedes presentar consultas y
                reclamos en administracion@excelenciaeducativa.co o al +57 324 235 5121. Para
                facilitar su trámite, escribe “Consulta o reclamo de datos personales” en el asunto.
              </p>
            </>
          ),
        },
        {
          title: "2. A quién y a qué servicios aplica",
          content: (
            <p>
              Aplica al sitio excelenciaeducativa.co, a sus formularios de contacto y cotización y,
              cuando estén conectados y sean administrados por Excelencia Educativa, a la plataforma
              educativa y a los recursos digitales asociados a libros. La plataforma puede tener
              avisos adicionales para explicar sus funciones concretas antes del registro.
            </p>
          ),
        },
        {
          title: "3. Información que podemos tratar",
          content: (
            <LegalList>
              <li>
                <strong className="text-foreground">Cuenta educativa:</strong> el nombre o nombre de
                usuario necesario para identificarte, el identificador de la cuenta y los datos
                mínimos de acceso que solicite la plataforma.
              </li>
              <li>
                <strong className="text-foreground">Aprendizaje:</strong> el libro asociado a la
                cuenta y el avance de las actividades vinculadas a ese libro. No solicitamos
                información ajena a esa finalidad ni datos sensibles como requisito de uso.
              </li>
              <li>
                <strong className="text-foreground">Autorización de un adulto:</strong> los datos
                mínimos para acreditar que el padre, madre o representante legal autorizó la cuenta
                del menor y para conservar evidencia de esa autorización.
              </li>
              <li>
                <strong className="text-foreground">
                  Formularios institucionales y laborales:
                </strong>
                nombre, correo, institución, cargo, ciudad, teléfono, mensaje y otros datos que la
                persona decida incluir en una solicitud de asesoría, contacto o empleo. Para una
                postulación también puede incluirse una hoja de vida.
              </li>
              <li>
                <strong className="text-foreground">Datos técnicos:</strong> el navegador,
                dispositivo, dirección IP, fecha y solicitudes de red que puedan registrar los
                servicios de alojamiento y seguridad para entregar y proteger el sitio.
              </li>
            </LegalList>
          ),
        },
        {
          title: "4. Finalidades y límites de uso",
          content: (
            <>
              <p>Usamos la información solo para:</p>
              <LegalList>
                <li>crear y administrar cuentas educativas autorizadas;</li>
                <li>
                  mostrar y guardar el avance de actividades de los libros asociados a cada cuenta;
                </li>
                <li>
                  responder solicitudes de contacto, asesoría, cotización o empleo que la persona
                  decida enviar;
                </li>
                <li>
                  mantener la seguridad, disponibilidad y funcionamiento del sitio y sus servicios;
                </li>
                <li>
                  atender solicitudes de los titulares y cumplir obligaciones legales aplicables.
                </li>
              </LegalList>
              <p>
                Excelencia Educativa no venderá los datos ni los utilizará para publicidad,
                mercadeo, perfilamiento comercial o finalidades distintas a las descritas en esta
                política. No compartiremos datos personales con terceros para que los usen con fines
                propios. Si se requiere un proveedor técnico que trate datos por cuenta nuestra, su
                acceso deberá limitarse a prestar el servicio contratado y estar sujeto a deberes de
                confidencialidad y seguridad.
              </p>
            </>
          ),
        },
        {
          title: "5. Protección reforzada de niñas, niños y adolescentes",
          content: (
            <>
              <p>
                Los datos de estudiantes menores de edad solo podrán tratarse cuando sea necesario
                para su experiencia educativa, se respete su interés superior y sus derechos, y se
                escuche su opinión de acuerdo con su edad, madurez y capacidad para comprender. La
                autorización previa, expresa e informada debe ser otorgada por su padre, madre o
                representante legal y debe poder consultarse posteriormente.
              </p>
              <p>
                El registro de un menor debe ser realizado o autorizado por un adulto con facultad
                para representarlo. La autorización no se presume por navegar, usar el sitio o
                guardar silencio. Si no se cuenta con autorización válida, no debe crearse ni
                mantenerse una cuenta del menor. El menor y su representante pueden solicitar
                acceso, corrección, revocatoria o supresión mediante los canales de esta política.
              </p>
            </>
          ),
        },
        {
          title: "6. Formularios, cotizaciones y servicios externos",
          content: (
            <p>
              En el sitio público, los formularios de contacto, asesoría y empleo preparan un
              mensaje en el programa de correo del visitante; el sitio no lo envía por sí mismo. La
              información solo llega a Excelencia Educativa si la persona decide enviar ese correo.
              La selección del catálogo se conserva localmente en el navegador para preparar una
              cotización; si el visitante elige abrir WhatsApp y enviar el mensaje, WhatsApp tratará
              los datos conforme a sus propios términos y política de privacidad. La infraestructura
              del sitio usa la red de Cloudflare, que puede recibir metadatos de conexión según su
              configuración; consulta su{" "}
              <a
                className="text-brand underline"
                href="https://www.cloudflare.com/privacypolicy/"
                target="_blank"
                rel="noreferrer"
              >
                Política de privacidad
              </a>
              .
            </p>
          ),
        },
        {
          title: "7. Conservación y seguridad",
          content: (
            <p>
              Conservaremos los datos solo durante el tiempo necesario para cumplir la finalidad
              autorizada y las obligaciones legales o contractuales aplicables. El avance asociado a
              una cuenta se conservará mientras la cuenta esté activa; al solicitar su eliminación,
              se suprimirá o anonimizará dentro de un plazo razonable, salvo la información que
              debamos conservar por una obligación legal o para atender reclamaciones. Aplicamos
              medidas razonables de acceso restringido, confidencialidad y seguridad, aunque ningún
              medio de transmisión o almacenamiento puede garantizar riesgo cero.
            </p>
          ),
        },
        {
          title: "8. Tus derechos y cómo ejercerlos",
          content: (
            <>
              <p>
                Puedes conocer, actualizar y rectificar tus datos; solicitar prueba de la
                autorización e información sobre su uso; presentar consultas o reclamos; revocar la
                autorización y solicitar supresión cuando proceda; y acceder gratuitamente a tus
                datos. Para un menor, la solicitud puede presentarla su representante legal,
                acreditando esa calidad. También se tendrá en cuenta la opinión del menor de acuerdo
                con su madurez.
              </p>
              <p>
                Envía tu solicitud a administracion@excelenciaeducativa.co e indica el derecho que
                deseas ejercer, la cuenta o servicio relacionado y un medio para responderte. Solo
                pediremos información adicional que sea necesaria para verificar identidad o
                representación. Las consultas se atienden en los términos legales de hasta 10 días
                hábiles y los reclamos en hasta 15 días hábiles, con las prórrogas previstas por la
                ley. Si consideras vulnerados tus derechos, puedes acudir a la Superintendencia de
                Industria y Comercio después de presentar primero tu solicitud ante el responsable.
              </p>
            </>
          ),
        },
        {
          title: "9. Marco normativo y cambios",
          content: (
            <>
              <p>
                Esta política se interpreta conforme a la Ley 1581 de 2012, el Decreto 1377 de 2013
                compilado en el Decreto 1074 de 2015 y las demás normas colombianas aplicables. La
                actualizaremos cuando cambien los servicios, las finalidades o las reglas
                aplicables, e indicaremos en esta página la fecha de la versión vigente.
              </p>
              <LegalList>
                <li>
                  <a
                    className="text-brand underline"
                    href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ley 1581 de 2012
                  </a>
                </li>
                <li>
                  <a
                    className="text-brand underline"
                    href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=53646"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Decreto 1377 de 2013
                  </a>
                </li>
                <li>
                  <Link className="text-brand underline" to="/cookies">
                    Política de cookies y almacenamiento local
                  </Link>
                </li>
              </LegalList>
            </>
          ),
        },
      ]}
    />
  );
}
