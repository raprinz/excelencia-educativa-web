import { createFileRoute } from "@tanstack/react-router";
import type { FormEvent } from "react";
import { PageShell } from "@/components/page-shell";
import { Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto · Excelencia Educativa" },
      {
        name: "description",
        content:
          "Contacta a Excelencia Educativa para conocer nuestro catálogo de libros, soluciones digitales y servicios para instituciones educativas en Colombia.",
      },
      { property: "og:title", content: "Contacto · Excelencia Educativa" },
      {
        property: "og:description",
        content: "Estamos para acompañarte en cada paso.",
      },
    ],
  }),
  component: Page,
});

const info = [
  {
    i: Phone,
    t: "Teléfono",
    d: "+57 324 2355121",
  },
  {
    i: Mail,
    t: "Correo",
    d: "administracion@excelenciaeducativa.co",
  },
  {
    i: Clock,
    t: "Horario",
    d: "Lun a Vie · 8:00am - 6:00pm",
  },
];

function Page() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const body = [
      `Nombre: ${data.get("nombre")}`,
      `Correo: ${data.get("correo")}`,
      `Institución: ${data.get("institucion")}`,
      "",
      String(data.get("mensaje")),
    ].join("\n");

    window.location.href = `mailto:administracion@excelenciaeducativa.co?subject=${encodeURIComponent(
      "Mensaje desde el sitio web",
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <PageShell
      eyebrow="Contacto"
      title="Hablemos."
      description="Elige el canal que prefieras. Un asesor te responderá en menos de 24 horas."
    >
      <div className="grid md:grid-cols-2 gap-12">
        {/* INFORMACIÓN DE CONTACTO */}
        <div>
          <div className="grid sm:grid-cols-2 gap-4">
            {info.map((item) => {
              const Icon = item.i;

              return (
                <div
                  key={item.t}
                  className="p-5 rounded-2xl bg-card border border-border min-w-0"
                >
                  <div className="size-10 rounded-lg bg-brand-soft text-brand grid place-items-center">
                    <Icon className="size-4" />
                  </div>

                  <div className="mt-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    {item.t}
                  </div>

                  <div
                    className={`mt-1 font-semibold ${
                      item.t === "Correo"
                        ? "text-xs break-words tracking-tight"
                        : "text-sm break-words"
                    }`}
                  >
                    {item.d}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FORMULARIO */}
        <form
          className="p-8 rounded-2xl bg-card border border-border space-y-4"
          onSubmit={handleSubmit}
        >
          <h3 className="text-xl font-bold">Envíanos un mensaje</h3>

          <div>
            <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Nombre
            </label>

            <input
              name="nombre"
              required
              className="mt-1 w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          <div>
            <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Correo
            </label>

            <input
              type="email"
              name="correo"
              required
              className="mt-1 w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          <div>
            <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Institución
            </label>

            <input
              name="institucion"
              required
              className="mt-1 w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          <div>
            <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Mensaje
            </label>

            <textarea
              rows={4}
              name="mensaje"
              required
              className="mt-1 w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            Enviar mensaje
          </button>
        </form>
      </div>
    </PageShell>
  );
}
