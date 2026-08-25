import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { BookOpen, Search } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/catalogo")({
  head: () => ({
    meta: [
      { title: "Catálogo · Excelencia Educativa" },
      {
        name: "description",
        content:
          "Explora nuestro catálogo de libros educativos por área, grado y editorial. Desde preescolar hasta once.",
      },
      { property: "og:title", content: "Catálogo inteligente · Excelencia Educativa" },
      {
        property: "og:description",
        content: "Libros para todos los niveles y áreas del currículo colombiano.",
      },
    ],
  }),
  component: Page,
});

const areas = [
  "Todos",
  "Matemáticas",
  "Español",
  "Inglés",
  "Ciencias",
  "Biología",
  "Sociales",
  "Dibujo",
  "Tecnología",
];
const grades = [
  "Todos",
  "Prejardín",
  "Jardín",
  "Transición",
  "1°",
  "2°",
  "3°",
  "4°",
  "5°",
  "6°",
  "7°",
  "8°",
  "9°",
  "10°",
  "11°",
];

const books = [
  {
    title: "Aventura Matemática",
    area: "Matemáticas",
    grade: "3°",
    editorial: "Excelencia",
    price: "$52.000",
  },
  {
    title: "Skyline Kids A1",
    area: "Inglés",
    grade: "Jardín",
    editorial: "Cambridge",
    price: "$68.000",
  },
  {
    title: "Ecosistemas Globales",
    area: "Biología",
    grade: "9°",
    editorial: "Excelencia",
    price: "$74.000",
  },
  {
    title: "Trazo Creativo",
    area: "Dibujo",
    grade: "5°",
    editorial: "Excelencia",
    price: "$45.000",
  },
  {
    title: "Palabras en Acción",
    area: "Español",
    grade: "4°",
    editorial: "Santillana",
    price: "$58.000",
  },
  {
    title: "Ciudadanía y Contexto",
    area: "Sociales",
    grade: "7°",
    editorial: "Excelencia",
    price: "$61.000",
  },
  {
    title: "Ciencia Viva",
    area: "Ciencias",
    grade: "2°",
    editorial: "Excelencia",
    price: "$49.000",
  },
  {
    title: "Tech Innovators",
    area: "Tecnología",
    grade: "10°",
    editorial: "Pearson",
    price: "$79.000",
  },
];

function Page() {
  const [q, setQ] = useState("");
  const [area, setArea] = useState("Todos");
  const [grade, setGrade] = useState("Todos");

  const filtered = books.filter(
    (b) =>
      (area === "Todos" || b.area === area) &&
      (grade === "Todos" || b.grade === grade) &&
      (q === "" || b.title.toLowerCase().includes(q.toLowerCase())),
  );

  return (
    <PageShell
      eyebrow="Catálogo inteligente"
      title="Encuentra el libro perfecto para cada aula."
      description="Filtra por área, grado o editorial. Todos nuestros libros incluyen acceso a la plataforma educativa."
    >
      <div className="grid md:grid-cols-[280px_1fr] gap-8">
        <aside className="space-y-8">
          <div>
            <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Buscar
            </label>
            <div className="mt-2 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Título del libro..."
                className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Área
            </label>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {areas.map((a) => (
                <button
                  key={a}
                  onClick={() => setArea(a)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    area === a
                      ? "bg-brand text-brand-foreground"
                      : "bg-surface hover:bg-surface-strong text-muted-foreground"
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Grado
            </label>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {grades.map((g) => (
                <button
                  key={g}
                  onClick={() => setGrade(g)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    grade === g
                      ? "bg-brand text-brand-foreground"
                      : "bg-surface hover:bg-surface-strong text-muted-foreground"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <section>
          <div className="mb-6 text-sm text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "libro" : "libros"} encontrados
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((b) => (
              <article
                key={b.title}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-card transition-all"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-brand-soft to-surface-strong grid place-items-center border-b border-border">
                  <BookOpen className="size-10 text-brand opacity-60" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono text-brand font-semibold uppercase">
                      {b.area}
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground">·</span>
                    <span className="text-[10px] font-mono text-muted-foreground uppercase">
                      {b.grade}
                    </span>
                  </div>
                  <h3 className="font-bold text-base">{b.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{b.editorial}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-mono font-semibold text-sm">{b.price}</span>
                    <button className="text-xs font-semibold text-brand hover:underline">
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No encontramos libros con estos filtros.
            </div>
          )}
        </section>
      </div>
    </PageShell>
  );
}
