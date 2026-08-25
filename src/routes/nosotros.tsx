import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros · Excelencia Educativa" },
      {
        name: "description",
        content:
          "Historia, misión, visión y valores de Excelencia Educativa, editorial colombiana en transformación digital.",
      },
      { property: "og:title", content: "Nosotros · Excelencia Educativa" },
      {
        property: "og:description",
        content: "Editorial colombiana con más de 25 años transformando la educación.",
      },
    ],
  }),
  component: Page,
});

const timeline = [
  {
    year: "1999",
    text: "Nace Excelencia Educativa como distribuidora de libros escolares en Barranquilla.",
  },
  { year: "2008", text: "Lanzamiento de los primeros títulos propios para primaria." },
  { year: "2015", text: "Alianzas estratégicas con editoriales internacionales." },
  { year: "2020", text: "Inicio de la transformación digital y contenidos interactivos." },
  { year: "2026", text: "Lanzamiento de la plataforma con Tutor de Inteligencia Artificial." },
];

const values = [
  {
    t: "Misión",
    d: "Diseñar y llevar contenidos educativos de calidad a cada rincón de Colombia, integrando pedagogía y tecnología.",
  },
  { t: "Visión", d: "Ser el ecosistema EdTech líder en Latinoamérica al 2030." },
  { t: "Valores", d: "Excelencia, innovación, compromiso, cercanía y responsabilidad social." },
];

function Page() {
  return (
    <PageShell
      eyebrow="Nosotros"
      title="Más de 25 años acompañando la educación en Colombia."
      description="Somos una editorial colombiana que hoy se reinventa como empresa EdTech: libros, plataforma digital e inteligencia artificial en un solo ecosistema."
    >
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {values.map((v) => (
          <div key={v.t} className="p-8 rounded-2xl bg-card border border-border">
            <h3 className="text-xl font-bold">{v.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
          </div>
        ))}
      </div>

      <div className="max-w-3xl">
        <span className="eyebrow">Línea de tiempo</span>
        <h2 className="mt-4 text-3xl font-extrabold">Nuestra evolución</h2>
        <ol className="mt-10 relative border-l-2 border-border pl-8 space-y-10">
          {timeline.map((t) => (
            <li key={t.year} className="relative">
              <div className="absolute -left-[41px] top-1 size-4 rounded-full bg-brand ring-4 ring-background" />
              <div className="font-mono text-brand font-semibold">{t.year}</div>
              <p className="mt-1 text-foreground">{t.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </PageShell>
  );
}
