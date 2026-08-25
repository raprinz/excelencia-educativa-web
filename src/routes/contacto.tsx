import { createFileRoute } from "@tanstack/react-router";
import type { FormEvent } from "react";
import { PageShell } from "@/components/page-shell";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto · Excelencia Educativa" },
      {
        name: "description",
        content:
          "Escríbenos, llámanos o visita nuestras oficinas en Bogotá. Cobertura nacional en Colombia.",
      },
      { property: "og:title", content: "Contacto · Excelencia Educativa" },
      { property: "og:description", content: "Estamos para acompañarte en cada paso." },
    ],
  }),
  component: Page,
});

const info = [
  { i: MapPin, t: "Dirección", d: "CR 9 F 44 05, Barranquilla, Colombia" },
  { i: Phone, t: "Teléfono", d: "+57 (601) 000 0000" },
  { i: Mail, t: "Correo", d: "excelenciaeducativa.edu@gmail.com" },
  { i: Clock, t: "Horario", d: "Lun a Vie · 8:00am - 6:00pm" },
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
    window.location.href = `mailto:}excelenciaeducativa.edu@gmail.com?subject=${encodeURIComponent("Mensaje desde el sitio web")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <PageShell
      eyebrow="Contacto"
      title="Hablemos sobre tu institución."
      description="Elige el canal que prefieras. Un asesor comercial te responderá en menos de 24 horas."
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="grid sm:grid-cols-2 gap-4">
            {info.map((i) => (
              <div key={i.t} className="p-5 rounded-2xl bg-card border border-border">
                <div className="size-10 rounded-lg bg-brand-soft text-brand grid place-items-center">
                  <i.i className="size-4" />
                </div>
                <div className="mt-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  {i.t}
                </div>
                <div className="mt-1 font-semibold text-sm">{i.d}</div>
              </div>
            ))}
          </div>
        </div>

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
