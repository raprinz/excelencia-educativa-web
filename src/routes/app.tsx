import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Bot,
  LockKeyhole,
  GraduationCap,
  Trophy,
  Sparkles,
} from "lucide-react";
import { PageShell } from "@/components/page-shell";
import appVideo from "@/assets/app-demo.mp4";

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
        content:
          "Aprende, avanza y conecta tus contenidos educativos desde cualquier lugar.",
      },
    ],
  }),
  component: Page,
});

const features = [
  {
    icon: GraduationCap,
    number: "01",
    label: "INICIO",
    title: "Bienvenida",
    description:
      "Una experiencia personalizada desde el primer acceso, diseñada para que el estudiante se familiarice con su entorno de aprendizaje.",
  },
  {
    icon: LockKeyhole,
    number: "02",
    label: "ACCESO",
    title: "Inicio de sesión",
    description:
      "Acceso seguro mediante las credenciales entregadas junto con el material educativo.",
  },
  {
    icon: BookOpen,
    number: "03",
    label: "APRENDIZAJE",
    title: "Mis cursos",
    description:
      "Encuentra tus libros, contenidos y actividades organizados en un solo lugar.",
  },
  {
    icon: Sparkles,
    number: "04",
    label: "PROGRESO",
    title: "Mi progreso",
    description:
      "Consulta tus avances, actividades completadas y evolución durante el proceso de aprendizaje.",
  },
  {
    icon: Bot,
    number: "05",
    label: "INTELIGENCIA",
    title: "Tutor IA",
    description:
      "Un asistente inteligente que acompaña al estudiante, responde dudas y facilita el aprendizaje paso a paso.",
  },
  {
    icon: Trophy,
    number: "06",
    label: "LOGROS",
    title: "Certificados",
    description:
      "Consulta tus logros obtenidos durante la experiencia educativa.",
  },
];

function Page() {
  return (
    <PageShell
      eyebrow="Nuestra App"
      title="Una nueva forma de aprender desde cualquier lugar."
      description="Una experiencia educativa que conecta los libros con contenidos digitales, seguimiento del progreso e inteligencia artificial."
    >
      {/* INTRODUCCIÓN + VIDEO */}
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
            La aplicación de Excelencia Educativa amplía la experiencia del
            libro tradicional y la conecta con herramientas digitales,
            actividades interactivas y un tutor basado en inteligencia
            artificial.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-soft text-brand text-sm font-semibold">
              <BookOpen className="size-4" />
              Contenidos educativos
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-soft text-brand text-sm font-semibold">
              <Bot className="size-4" />
              Tutor IA
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-soft text-brand text-sm font-semibold">
              <Trophy className="size-4" />
              Logros
            </div>
          </div>
        </div>

        {/* VIDEO */}
        <div className="relative">
          <div className="absolute -inset-6 bg-brand/5 rounded-[40px] rotate-3" />

          <video
            src={appVideo}
            autoPlay
            muted
            loop
            playsInline
            className="relative w-full max-w-[400px] mx-auto rounded-[2rem] shadow-elevated bg-black"
          />
        </div>
      </div>

      {/* FUNCIONALIDADES */}
      <div className="mt-24">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Experiencia del estudiante</span>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight">
            Todo lo que necesitas para aprender.
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Desde el primer acceso hasta sus logros, la aplicación acompaña al
            estudiante en cada etapa de su experiencia educativa.
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

                <span className="font-mono text-xs text-muted-foreground">
                  {feature.number}
                </span>
              </div>

              <div className="mt-6 text-[10px] font-mono uppercase tracking-widest text-brand font-semibold">
                {feature.label}
              </div>

              <h3 className="mt-2 text-xl font-bold">
                {feature.title}
              </h3>

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
            Muy pronto en tu tienda de aplicaciones.
          </h2>

          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Estamos preparando el lanzamiento de la aplicación para que
            estudiantes puedan disfrutar de una nueva experiencia de
            aprendizaje desde sus dispositivos móviles.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border text-sm font-semibold">
              <span className="text-brand">A</span>
              App Store
            </div>

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border text-sm font-semibold">
              <span className="text-brand">▶</span>
              Google Play
            </div>
          </div>

          <p className="mt-5 text-xs text-muted-foreground">
            Disponible próximamente para Android e iOS.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <p className="text-sm text-muted-foreground">
          ¿Quieres conocer cómo funciona nuestra APP educativa?
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
