import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { canonicalLink, pageSocialMeta } from "@/lib/seo";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog · Excelencia Educativa" },
      {
        name: "description",
        content:
          "Ideas sobre educación, innovación, tecnología e IA para docentes e instituciones.",
      },
      { property: "og:title", content: "Blog · Excelencia Educativa" },
      {
        property: "og:description",
        content: "Educación, innovación y tecnología para instituciones.",
      },
      ...pageSocialMeta(
        "/blog",
        "Blog · Excelencia Educativa",
        "Educación, innovación y tecnología para instituciones.",
      ),
    ],
    links: [canonicalLink("/blog")],
  }),
  component: Page,
});

const posts = [
  { cat: "IA", title: "Cómo un tutor con IA mejora el rendimiento en primaria", read: "5 min" },
  { cat: "Innovación", title: "5 metodologías activas para el aula de secundaria", read: "7 min" },
  { cat: "Docentes", title: "Guía práctica: diseñar evaluaciones formativas", read: "6 min" },
  {
    cat: "Tecnología",
    title: "Realidad aumentada en libros escolares: ¿es viable?",
    read: "4 min",
  },
  { cat: "Noticias", title: "Nuevos lanzamientos editoriales 2025", read: "3 min" },
  { cat: "Educación", title: "El rol del docente en la era de la IA", read: "8 min" },
];

function Page() {
  return (
    <PageShell
      eyebrow="Blog"
      title="Ideas para transformar la educación."
      description="Publicamos semanalmente sobre pedagogía, innovación, tecnología e inteligencia artificial."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <article
            key={p.title}
            className="group p-6 rounded-2xl bg-card border border-border hover:shadow-card transition-all cursor-pointer"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest text-brand font-semibold">
              {p.cat}
            </span>
            <h3 className="mt-3 text-lg font-bold group-hover:text-brand transition-colors">
              {p.title}
            </h3>
            <div className="mt-4 text-xs text-muted-foreground">{p.read} de lectura</div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
