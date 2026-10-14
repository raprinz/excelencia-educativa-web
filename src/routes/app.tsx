import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Bot, GraduationCap, Trophy, Sparkles } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { canonicalLink, pageSocialMeta } from "@/lib/seo";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "App móvil · Excelencia Educativa" },
      {
        name: "description",
        content:
          "Una experiencia educativa diseñada para acompañar al estudiante con contenidos, progreso, gamificación e inteligencia artificial.",
      },
      {
        property: "og:title",
        content: "App móvil · Excelencia Educativa",
      },
      {
        property: "og:description",
        content: "Aprende, avanza y conecta tus contenidos educativos desde cualquier lugar.",
      },
      ...pageSocialMeta(
        "/app",
        "App móvil · Excelencia Educativa",
        "Aprende, avanza y conecta tus contenidos educativos desde cualquier lugar.",
      ),
    ],
    links: [canonicalLink("/app")],
  }),
  component: Page,
});

const features = [
  {
    icon: GraduationCap,
    number: "01",
    label: "PROPÓSITO",
    title: "Aprendizaje significativo",
    description:
      "Creamos contenidos que acompañan a estudiantes y docentes en sus retos de aprendizaje.",
  },
  {
    icon: LockKeyhole,
    number: "02",
    label: "CONTENIDOS",
    title: "Recursos educativos",
    description:
      "Materiales pensados para complementar la experiencia de los libros y el trabajo en el aula.",
  },
  {
    icon: BookOpen,
    number: "03",
    label: "EXPERIENCIA",
    title: "Libros que conectan",
    description:
      "Una propuesta editorial que abre posibilidades para explorar, practicar y compartir.",
  },
  {
    icon: Sparkles,
    number: "04",
    label: "COMUNIDAD",
    title: "Acompañamiento cercano",
    description: "Pensamos cada recurso desde las necesidades de las comunidades educativas.",
  },
  {
    icon: Bot,
    number: "05",
    label: "INNOVACIÓN",
    title: "Tecnología con propósito",
    description:
      "Exploramos nuevas herramientas digitales para enriquecer la experiencia de aprender.",
  },
  {
    icon: Trophy,
    number: "06",
    label: "EVOLUCIÓN",
    title: "Una propuesta en renovación",
    description:
      "La experiencia digital está evolucionando; pronto daremos a conocer sus nuevos detalles.",
  },
];

function Page() {
  return (
    <PageShell
      eyebrow="Nuestra App"
      title="La experiencia digital que estamos construyendo."
      description="Conectamos nuestros contenidos educativos con nuevas formas de acompañar a estudiantes y docentes."
    >
      {/* INTRODUCCIÓN + ILUSTRACIÓN */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="eyebrow flex items-center gap-2">
            <Sparkles className="size-3" />
            Experiencia educativa
          </span>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight leading-tight">
            Todo el aprendizaje en un solo lugar.
          </h2>

          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Estamos renovando la experiencia digital para conectar nuestros contenidos educativos
            con herramientas útiles para estudiantes y docentes. Muy pronto compartiremos cómo será
            esta nueva etapa.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-soft text-brand text-sm font-semibold">
              <BookOpen className="size-4" />
              Contenidos educativos
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-soft text-brand text-sm font-semibold">
              <Bot className="size-4" />
              Innovación educativa
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-soft text-brand text-sm font-semibold">
              <Trophy className="size-4" />
              Aprendizaje
            </div>
          </div>
        </div>

        {/* Composición visual sin capturas de la interfaz anterior */}
        <div className="relative mx-auto w-full max-w-[440px]">
          <div className="absolute -inset-5 rounded-[40px] bg-brand/5 rotate-3" />
          <div className="relative rounded-[2rem] border border-border bg-card p-6 shadow-elevated sm:p-8">
            <div className="flex items-center gap-3">
              <div className="grid size-12 place-items-center rounded-2xl bg-brand text-brand-foreground">
                <GraduationCap className="size-6" />
              </div>
              <div>
                <p className="font-bold">Excelencia Educativa</p>
                <p className="text-xs text-muted-foreground">Aprendizaje conectado</p>
              </div>
            </div>
            <div className="mt-7 rounded-2xl bg-brand-soft p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                Una nueva etapa
              </span>
              <h3 className="mt-2 text-2xl font-extrabold leading-tight">
                Diseñamos mejores formas de aprender.
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Una propuesta que evoluciona junto a las necesidades de cada comunidad.
              </p>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { icon: BookOpen, label: "Contenidos" },
                { icon: Sparkles, label: "Experiencias" },
                { icon: Bot, label: "Innovación" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-2xl border border-border p-3 text-center">
                  <div className="mx-auto grid size-10 place-items-center rounded-xl bg-brand-soft text-brand">
                    <Icon className="size-5" />
                  </div>
                  <p className="mt-2 text-xs font-semibold">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-border p-4">
              <div className="grid size-9 place-items-center rounded-full bg-brand/10 text-brand">
                <Trophy className="size-4" />
              </div>
              <p className="text-sm font-medium">Más detalles, muy pronto</p>
            </div>
          </div>
        </div>
      </div>

      {/* FUNCIONALIDADES */}
      <div className="mt-24">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Experiencia del estudiante</span>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight">
            Una propuesta pensada para aprender mejor.
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Estamos construyendo una propuesta digital que pone el aprendizaje en el centro y
            evoluciona con su comunidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="group p-7 rounded-2xl bg-card border border-border hover:border-brand/50 hover:shadow-card transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="size-11 rounded-xl bg-brand-soft text-brand grid place-items-center group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                  <feature.icon className="size-5" />
                </div>

                <span className="font-mono text-xs text-muted-foreground">{feature.number}</span>
              </div>

              <div className="mt-6 text-[10px] font-mono uppercase tracking-widest text-brand font-semibold">
                {feature.label}
              </div>

              <h3 className="mt-2 text-xl font-bold">{feature.title}</h3>

              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* PRÓXIMAMENTE */}
      <div className="mt-24">
        <div className="p-10 md:p-14 rounded-3xl bg-surface/60 border border-border text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-soft text-brand text-xs font-mono uppercase tracking-widest font-semibold">
            <Sparkles className="size-3" />
            Próximamente
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-extrabold tracking-tight">
            Estamos preparando la nueva experiencia.
          </h2>

          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            La propuesta digital está en renovación. Pronto compartiremos más información sobre sus
            contenidos, disponibilidad y herramientas.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <p className="text-sm text-muted-foreground">
          ¿Quieres conocer nuestros recursos educativos?
        </p>

        <a
          href="https://calendar.app.google/R6k47XomnM8xmcag6"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-4 inline-flex items-center"
        >
          Agendar asesoría
          <ArrowRight className="ml-2 size-4" />
        </a>
      </div>
    </PageShell>
  );
}
