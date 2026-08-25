import { createFileRoute } from "@tanstack/react-router";
import type { FormEvent } from "react";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/cotizacion")({
  head: () => ({
    meta: [
      { title: "Solicitar cotización · Excelencia Educativa" },
      {
        name: "description",
        content: "Solicita una cotización personalizada para tu institución educativa.",
      },
      { property: "og:title", content: "Solicitar cotización · Excelencia Educativa" },
      {
        property: "og:description",
        content: "Cotización para instituciones y colegios en Colombia.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const fields = [
    "Institución",
    "Persona de contacto",
    "Correo",
    "Teléfono",
    "Ciudad",
    "Niveles / grados de interés",
    "Cantidad aproximada de estudiantes",
  ];
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = fields
      .map((label) => `${label}: ${data.get(label)}`)
      .concat(["", `Detalle / observaciones: ${data.get("Detalle / observaciones")}`])
      .join("\n");
    window.location.href = `mailto:info@excelenciaeducativa.co?subject=${encodeURIComponent("Solicitud de cotización")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <PageShell
      eyebrow="Solicitar cotización"
      title="Cotización para tu institución."
      description="Cuéntanos qué títulos y cantidades necesitas. Enviaremos una propuesta comercial en menos de 48 horas."
    >
      <form
        className="max-w-3xl mx-auto p-8 md:p-12 rounded-2xl bg-card border border-border space-y-5"
        onSubmit={handleSubmit}
      >
        {fields.map((l) => (
          <div key={l}>
            <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              {l}
            </label>
            <input
              name={l}
              required
              className="mt-1 w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>
        ))}
        <div>
          <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Detalle / observaciones
          </label>
          <textarea
            rows={5}
            name="Detalle / observaciones"
            className="mt-1 w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand"
          />
        </div>
        <button type="submit" className="btn-primary w-full">
          Enviar solicitud
        </button>
      </form>
    </PageShell>
  );
}
