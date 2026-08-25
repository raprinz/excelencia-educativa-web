import { createFileRoute } from "@tanstack/react-router";
import type { FormEvent } from "react";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/asesoria")({
  head: () => ({
    meta: [
      { title: "Agendar asesoría · Excelencia Educativa" },
      {
        name: "description",
        content:
          "Agenda una asesoría gratuita con nuestro equipo. Un asesor te contactará en menos de 24 horas.",
      },
      { property: "og:title", content: "Agendar asesoría · Excelencia Educativa" },
      {
        property: "og:description",
        content: "Reserva tu asesoría personalizada para instituciones educativas.",
      },
    ],
  }),
  component: Page,
});

const fields = [
  ["Nombre completo", "text"],
  ["Institución", "text"],
  ["Cargo", "text"],
  ["Ciudad", "text"],
  ["Teléfono", "tel"],
  ["Correo", "email"],
  ["No. aprox. de estudiantes", "number"],
  ["Fecha deseada", "date"],
  ["Hora", "time"],
] as const;

function Page() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = fields
      .map(([label]) => `${label}: ${data.get(label)}`)
      .concat(["", `Comentarios: ${data.get("Comentarios")}`])
      .join("\n");
    window.location.href = `mailto:info@excelenciaeducativa.co?subject=${encodeURIComponent("Solicitud de asesoría")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <PageShell
      eyebrow="Agendar asesoría"
      title="Reserva una asesoría gratuita."
      description="Un asesor comercial revisará tu solicitud y te contactará para confirmar."
    >
      <form
        className="max-w-3xl mx-auto p-8 md:p-12 rounded-2xl bg-card border border-border"
        onSubmit={handleSubmit}
      >
        <div className="grid md:grid-cols-2 gap-5">
          {fields.map(([label, type]) => (
            <div key={label} className={label === "Nombre completo" ? "md:col-span-2" : ""}>
              <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                {label}
              </label>
              <input
                type={type}
                name={label}
                required
                className="mt-1 w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>
          ))}
          <div className="md:col-span-2">
            <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Comentarios
            </label>
            <textarea
              rows={4}
              name="Comentarios"
              className="mt-1 w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>
        </div>
        <button type="submit" className="btn-primary w-full mt-8">
          Solicitar asesoría
        </button>
        <p className="mt-4 text-xs text-muted-foreground text-center">
          Al enviar aceptas nuestra política de tratamiento de datos.
        </p>
      </form>
    </PageShell>
  );
}
