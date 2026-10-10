import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { canonicalLink, pageSocialMeta } from "@/lib/seo";
import {
  Play,
  Headphones,
  Gamepad2,
  Award,
  Bot,
  QrCode,
  ClipboardCheck,
  Sparkles,
  ArrowRight,
  Monitor,
  ExternalLink,
} from "lucide-react";

// ============================================================
// ENLACE A LA PLATAFORMA EDUCATIVA
// ============================================================

const PLATFORM_URL = "https://aula.excelenciaeducativa.co/";

export const Route = createFileRoute("/plataforma")({
  head: () => ({
    meta: [
      { title: "Plataforma Educativa · Excelencia Educativa" },
      {
        name: "description",
        content:
          "Videos, audios, juegos, evaluaciones, IA y certificados en el ecosistema digital de Excelencia Educativa.",
      },
      {
        property: "og:title",
        content: "Plataforma Educativa · Excelencia Educativa",
      },
      {
        property: "og:description",
        content: "El ecosistema digital que acompaña cada libro impreso.",
      },
      ...pageSocialMeta(
        "/plataforma",
        "Plataforma Educativa · Excelencia Educativa",
        "El ecosistema digital que acompaña cada libro impreso.",
      ),
    ],
    links: [canonicalLink("/plataforma")],
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
  {
    icon: Bot,
    t: "Tutor con IA",
    d: "Un asistente que resuelve dudas y explica conceptos.",
  },
  {
    icon: Award,
    t: "Certificados",
    d: "Reconocimientos digitales al completar cada trayecto.",
  },
  {
    icon: QrCode,
    t: "Activación por código",
    d: "Cada libro incluye un código único de acceso.",
  },
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
      description="Cada libro incluye acceso a la plataforma. Los estudiantes activan su contenido mediante un código único y disfrutan de una experiencia enriquecida, guiada por IA."
    >
      {/* ======================================================
          ACCESO A LA PLATAFORMA
      ======================================================= */}

      <section className="mb-12 relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand via-brand to-[oklch(0.45_0.2_270)] text-brand-foreground shadow-xl ring-1 ring-brand/20">
        <div className="absolute -top-20 -right-20 size-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 size-64 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 p-8 md:p-12">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="size-3.5" />
              Acceso a la plataforma
            </div>

            <h2 className="mt-5 text-2xl md:text-3xl font-extrabold tracking-tight">
              Ingresa a tu aula virtual
            </h2>

            <p className="mt-4 text-sm md:text-base text-white/85 leading-relaxed max-w-xl">
              Continúa tu experiencia educativa en el aula digital de
              Excelencia Educativa. El acceso está disponible para estudiantes
              y docentes.
            </p>

            <p className="mt-3 text-xs text-white/70">
              Inicia sesión en la plataforma educativa.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 shrink-0 w-full lg:w-auto">
            <a
              href={PLATFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 w-full lg:w-auto px-8 py-5 rounded-xl bg-white text-brand text-base font-extrabold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
            >
              <Monitor className="size-5" />
              <span>Iniciar sesión</span>
              <ExternalLink className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <span className="text-xs text-white/70 text-center">
              aula.excelenciaeducativa.co · Se abre en una nueva pestaña
            </span>
          </div>
        </div>
      </section>

      {/* ======================================================
          FUNCIONALIDADES
      ======================================================= */}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((f) => (
          <div
            key={f.t}
            className="p-6 rounded-2xl bg-card border border-border hover:border-brand/50 hover:shadow-card transition-all"
          >
            <div className="size-11 rounded-xl bg-brand-soft text-brand grid place-items-center">
              <f.icon className="size-5" />
            </div>

            <h3 className="mt-5 font-bold">{f.t}</h3>

            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {f.d}
            </p>
          </div>
        ))}
      </div>

      {/* ======================================================
          LLAMADO FINAL
      ======================================================= */}

      <section className="mt-14 rounded-2xl border border-border bg-surface/40 p-6 md:p-8 text-center">
        <h2 className="text-xl md:text-2xl font-extrabold">
          ¿Listo para continuar aprendiendo?
        </h2>

        <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Accede a los recursos educativos digitales y aprovecha las
          herramientas que complementan cada experiencia de aprendizaje.
        </p>

        <a
          href={PLATFORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 btn-primary"
        >
          Ingresar a la plataforma
          <ArrowRight className="size-4" />
        </a>
      </section>
    </PageShell>
  );
}

