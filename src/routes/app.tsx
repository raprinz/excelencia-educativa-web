import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Bot, GraduationCap, Sparkles } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { canonicalLink, pageSocialMeta } from "@/lib/seo";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "App móvil · Excelencia Educativa" },
      {
        name: "description",
        content:
          "Conoce la renovación digital de Excelencia Educativa y nuestra propuesta de contenidos y recursos para estudiantes y docentes.",
      },
      {
        property: "og:title",
        content: "App móvil · Excelencia Educativa",
      },
      {
        property: "og:description",
        content: "Una nueva etapa digital para conectar contenidos educativos y comunidades.",
      },
      ...pageSocialMeta(
        "/app",
        "App móvil · Excelencia Educativa",
        "Una nueva etapa digital para conectar contenidos educativos y comunidades.",
      ),
    ],
    links: [canonicalLink("/app")],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="Nuestra App" title="Excelencia Educativa en digital.">
      {/* Una sola sección reúne el mensaje, los pilares y el estado de renovación. */}
      <section className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="eyebrow flex items-center gap-2">
            <Sparkles className="size-3" />
            En renovación
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Diseñamos una experiencia digital a la medida del aprendizaje.
          </h2>

          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Estamos renovando nuestra propuesta para conectar los contenidos educativos con
            herramientas útiles para estudiantes y docentes. Pronto compartiremos más detalles de
            esta nueva etapa.
          </p>

          <a
            href="https://calendar.app.google/R6k47XomnM8xmcag6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex items-center"
          >
            Hablar con nuestro equipo
            <ArrowRight className="ml-2 size-4" />
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-[480px]">
          <div className="absolute -inset-5 rounded-[40px] bg-brand/5 rotate-3" />
          <div className="relative rounded-[2rem] border border-border bg-card p-6 shadow-elevated sm:p-8">
            <div className="flex items-center gap-3">
              <div className="grid size-12 place-items-center rounded-2xl bg-brand text-brand-foreground">
                <GraduationCap className="size-6" />
              </div>
              <div>
                <p className="font-bold">Excelencia Educativa</p>
                <p className="text-xs text-muted-foreground">Libros y recursos para aprender</p>
              </div>
            </div>
            <div className="mt-7 grid gap-3">
              {[
                {
                  icon: BookOpen,
                  label: "Contenidos",
                  detail: "Materiales educativos con propósito",
                },
                {
                  icon: Sparkles,
                  label: "Experiencias",
                  detail: "Recursos que complementan el aprendizaje",
                },
                {
                  icon: Bot,
                  label: "Innovación",
                  detail: "Tecnología pensada para la comunidad educativa",
                },
              ].map(({ icon: Icon, label, detail }) => (
                <div
                  key={label}
                  className="flex min-w-0 items-center gap-4 rounded-2xl border border-border p-4"
                >
                  <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                    <Icon className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold">{label}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
