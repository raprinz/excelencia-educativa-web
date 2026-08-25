import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Bot, MessageSquare, Target, Sparkles, GraduationCap, Heart } from "lucide-react";

export const Route = createFileRoute("/ia")({
  head: () => ({
    meta: [
      { title: "Tutor IA · Excelencia Educativa" },
      {
        name: "description",
        content:
          "Un tutor inteligente que resuelve dudas, guía al estudiante y acompaña el aprendizaje 24/7.",
      },
      { property: "og:title", content: "Tutor IA · Excelencia Educativa" },
      {
        property: "og:description",
        content: "Inteligencia artificial al servicio del aprendizaje.",
      },
    ],
  }),
  component: Page,
});

const caps = [
  {
    i: MessageSquare,
    t: "Resolver dudas",
    d: "Explicaciones claras y adaptadas al nivel del estudiante.",
  },
  { i: GraduationCap, t: "Explicar conceptos", d: "Ejemplos, analogías y pasos guiados." },
  { i: Target, t: "Recomendar actividades", d: "Sugerencias personalizadas según el progreso." },
  { i: Heart, t: "Motivar el aprendizaje", d: "Refuerzos positivos y logros gamificados." },
  { i: Sparkles, t: "Corregir ejercicios", d: "Retroalimentación inmediata con explicación." },
  { i: Bot, t: "Acompañamiento 24/7", d: "Siempre disponible, sin horarios de clase." },
];

function Page() {
  return (
    <PageShell
      eyebrow="Inteligencia Artificial"
      title="Un tutor inteligente para cada estudiante."
      description='Conoce a "E", el avatar inspirado en Excelencia Educativa: un tutor con IA que acompaña, explica y motiva el aprendizaje.'
    >
      <div className="mb-16 p-12 rounded-3xl bg-gradient-to-br from-brand to-[oklch(0.45_0.2_270)] text-brand-foreground text-center relative overflow-hidden">
        <div className="relative z-10">
          <div className="mx-auto size-24 rounded-full bg-white/20 grid place-items-center text-5xl font-extrabold ring-4 ring-white/10">
            E
          </div>
          <p className="mt-6 text-xl max-w-xl mx-auto">
            “Hola, soy E. Estoy aquí para ayudarte a aprender mejor, a tu ritmo.”
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {caps.map((c) => (
          <div key={c.t} className="p-6 rounded-2xl bg-card border border-border">
            <div className="size-11 rounded-xl bg-brand-soft text-brand grid place-items-center">
              <c.i className="size-5" />
            </div>
            <h3 className="mt-5 font-bold">{c.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
