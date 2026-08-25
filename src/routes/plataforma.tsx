import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import {
  Play,
  Headphones,
  Gamepad2,
  Award,
  Bot,
  QrCode,
  ClipboardCheck,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/plataforma")({
  head: () => ({
    meta: [
      { title: "Plataforma Educativa · Excelencia Educativa" },
      {
        name: "description",
        content:
          "Videos, audios, juegos, evaluaciones, IA y certificados en el ecosistema digital de Excelencia Educativa.",
      },
      { property: "og:title", content: "Plataforma Educativa · Excelencia Educativa" },
      {
        property: "og:description",
        content: "El ecosistema digital que acompaña cada libro impreso.",
      },
    ],
  }),
  component: Page,
});

const features = [
  {
    icon: Play,
    t: "Videos interactivos",
    d: "Contenidos audiovisuales sincronizados con cada unidad del libro.",
  },
  {
    icon: Headphones,
    t: "Audios y podcasts",
    d: "Comprensión auditiva y pronunciación para todas las áreas.",
  },
  {
    icon: Gamepad2,
    t: "Juegos y gamificación",
    d: "Aprender jugando con retos, medallas y niveles.",
  },
  {
    icon: ClipboardCheck,
    t: "Evaluaciones",
    d: "Pruebas automáticas con retroalimentación inmediata.",
  },
  { icon: Bot, t: "Tutor con IA", d: "Un asistente que resuelve dudas y explica conceptos." },
  { icon: Award, t: "Certificados", d: "Reconocimientos digitales al completar cada trayecto." },
  { icon: QrCode, t: "Activación por Codigo", d: "Cada libro incluye un código único de acceso." },
  {
    icon: Sparkles,
    t: "Analítica del docente",
    d: "Panel con progreso, dificultades y recomendaciones.",
  },
];

function Page() {
  return (
    <PageShell
      eyebrow="Plataforma Educativa"
      title="Un ecosistema digital que da vida al libro impreso."
      description="Cada libro incluye acceso a la plataforma. Los estudiantes activan su contenido mediante un CODIGO único y disfrutan de una experiencia enriquecida, guiada por IA."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((f) => (
          <div
            key={f.t}
            className="p-6 rounded-2xl bg-card border border-border hover:border-brand/50 transition-colors"
          >
            <div className="size-11 rounded-xl bg-brand-soft text-brand grid place-items-center">
              <f.icon className="size-5" />
            </div>
            <h3 className="mt-5 font-bold">{f.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
