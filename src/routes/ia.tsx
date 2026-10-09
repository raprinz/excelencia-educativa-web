import { createFileRoute } from "@tanstack/react-router";
import {
  Bot,
  MessageSquare,
  Target,
  Sparkles,
  GraduationCap,
  Heart,
  ArrowRight,
} from "lucide-react";
import { Mascot } from "page-mascot";
import { PageShell } from "@/components/page-shell";
import { canonicalLink, pageSocialMeta } from "@/lib/seo";

export const Route = createFileRoute("/ia")({
  head: () => ({
    meta: [
      { title: "Ronaldo · Tutor IA · Excelencia Educativa" },
      {
        name: "description",
        content:
          "Conoce a Ronaldo, el tutor con inteligencia artificial de Excelencia Educativa que acompaña, explica y motiva el aprendizaje.",
      },
      {
        property: "og:title",
        content: "Ronaldo · Tutor IA · Excelencia Educativa",
      },
      {
        property: "og:description",
        content:
          "Un compañero inteligente para aprender, preguntar y avanzar.",
      },
      ...pageSocialMeta(
        "/ia",
        "Ronaldo · Tutor IA · Excelencia Educativa",
        "Un compañero inteligente para aprender, preguntar y avanzar.",
      ),
    ],
    links: [canonicalLink("/ia")],
  }),
  component: Page,
});

const caps = [
  {
    i: MessageSquare,
    t: "Resolver dudas",
    d: "Explicaciones claras y adaptadas al nivel de cada estudiante.",
  },
  {
    i: GraduationCap,
    t: "Explicar conceptos",
    d: "Ejemplos, analogías y pasos guiados para comprender mejor.",
  },
  {
    i: Target,
    t: "Recomendar actividades",
    d: "Sugerencias personalizadas según el progreso y las necesidades.",
  },
  {
    i: Heart,
    t: "Motivar el aprendizaje",
    d: "Refuerzos positivos para mantener la motivación y avanzar.",
  },
  {
    i: Sparkles,
    t: "Corregir ejercicios",
    d: "Retroalimentación inmediata acompañada de una explicación.",
  },
  {
    i: Bot,
    t: "Acompañamiento 24/7",
    d: "Disponible cuando el estudiante necesite orientación.",
  },
];

function Page() {
  return (
    <PageShell
      eyebrow="Inteligencia Artificial"
      title="Conoce a Ronaldo."
      description="Tu compañero inteligente para aprender, preguntar y avanzar. Un tutor con inteligencia artificial diseñado para acompañar a cada estudiante a su propio ritmo."
    >
      {/* HERO RONALDO */}
      <section className="mb-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand via-brand to-[oklch(0.45_0.2_270)] text-brand-foreground">
          {/* Decoración */}
          <div className="absolute -top-24 -right-24 size-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 size-80 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center p-8 md:p-12 lg:p-16">
            {/* TEXTO */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 text-xs font-mono uppercase tracking-widest">
                <Sparkles className="size-3.5" />
                Tutor inteligente
              </div>

              <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight">
                Hola, soy Ronaldo.
              </h2>

              <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Estoy aquí para ayudarte a comprender, practicar y avanzar
                mientras aprendes.
              </p>

              <p className="mt-4 text-sm md:text-base text-white/75 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Ronaldo combina inteligencia artificial y acompañamiento
                educativo para convertir cada pregunta en una oportunidad de
                aprendizaje.
              </p>

              {/* BENEFICIOS */}
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm">
                  <GraduationCap className="size-4" />
                  Aprende a tu ritmo
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm">
                  <Heart className="size-4" />
                  Siempre contigo
                </div>
              </div>
            </div>

            {/* MASCOTA */}
            <div className="flex justify-center lg:justify-end">
              <div className="flex flex-col items-center">
                <div className="relative flex items-center justify-center">
                  {/* Aura detrás de Ronaldo */}
                  <div className="absolute size-64 rounded-full bg-white/10 blur-2xl" />

                  <div className="relative p-4 md:p-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm shadow-2xl">
                    <Mascot
                      directions="/mascots/ronaldo-directions.webp"
                      reactions="/mascots/ronaldo-reactions.webp"
                      size={200}
                      label="Ronaldo, el tutor inteligente"
                    />
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <span className="text-2xl font-extrabold">
                    Ronaldo
                  </span>

                  <span className="block mt-1 text-xs text-white/70 font-mono uppercase tracking-widest">
                    Tutor IA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPACIDADES */}
      <section>
        <div className="max-w-2xl mb-10">
          <span className="eyebrow">Lo que puede hacer</span>

          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
            Mucho más que responder preguntas.
          </h2>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Ronaldo está pensado para acompañar el proceso de aprendizaje,
            ofreciendo orientación, práctica y retroalimentación cuando el
            estudiante la necesita.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {caps.map((c) => {
            const Icon = c.i;

            return (
              <div
                key={c.t}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-brand/40 hover:shadow-card transition-all"
              >
                <div className="size-11 rounded-xl bg-brand-soft text-brand grid place-items-center group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                  <Icon className="size-5" />
                </div>

                <h3 className="mt-5 font-bold text-lg">
                  {c.t}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {c.d}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CIERRE */}
      <section className="mt-20">
        <div className="rounded-3xl border border-border bg-surface/40 p-8 md:p-12 text-center">
          <div className="mx-auto size-14 rounded-2xl bg-brand-soft text-brand grid place-items-center">
            <Bot className="size-7" />
          </div>

          <h2 className="mt-6 text-2xl md:text-3xl font-extrabold">
            Aprender también es tener a alguien que te acompañe.
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Ronaldo nace para hacer que la tecnología sea una herramienta
            cercana, útil y fácil de entender para cada estudiante.
          </p>

          <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand">
            <span>Próximamente con Excelencia Educativa</span>
            <ArrowRight className="size-4" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
