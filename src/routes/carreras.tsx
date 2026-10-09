import { createFileRoute } from "@tanstack/react-router";
import type { FormEvent } from "react";
import { PageShell } from "@/components/page-shell";
import { canonicalLink, pageSocialMeta } from "@/lib/seo";

export const Route = createFileRoute("/carreras")({
  head: () => ({
    meta: [
      { title: "Trabaja con nosotros · Excelencia Educativa" },
      {
        name: "description",
        content: "Únete al equipo de Excelencia Educativa. Envíanos tu hoja de vida.",
      },
      { property: "og:title", content: "Trabaja con nosotros · Excelencia Educativa" },
      {
        property: "og:description",
        content: "Buscamos personas apasionadas por la educación y la tecnología.",
      },
      ...pageSocialMeta(
        "/carreras",
        "Trabaja con nosotros · Excelencia Educativa",
        "Buscamos personas apasionadas por la educación y la tecnología.",
      ),
    ],
    links: [canonicalLink("/carreras")],
  }),
  component: Page,
});

function Page() {
  const fields = ["Nombre completo", "Correo", "Teléfono", "Ciudad", "Cargo al que aspira"];
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = fields
      .map((label) => `${label}: ${data.get(label)}`)
      .concat(["", "Adjunto: hoja de vida en PDF."])
      .join("\n");
    window.location.href = `mailto:administracion@excelenciaeducativa.co?subject=${encodeURIComponent("Postulación laboral")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <PageShell
      eyebrow="Trabaja con nosotros"
      title="Construyamos juntos el futuro de la educación."
      description="Somos un equipo apasionado por transformar la educación desde la pedagogía y la tecnología."
    >
      <form
        className="max-w-2xl mx-auto p-8 md:p-12 rounded-2xl bg-card border border-border space-y-5"
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
            Hoja de vida (PDF)
          </label>
          <input
            type="file"
            accept="application/pdf"
            required
            className="mt-1 w-full text-sm text-muted-foreground"
          />
        </div>
        <button type="submit" className="btn-primary w-full">
          Postularme
        </button>
        <p className="text-xs text-muted-foreground">
          Se abrirá tu Provedor de correo para que adjuntes tu hoja de vida en PDF.
        </p>
      </form>
    </PageShell>
  );
}
