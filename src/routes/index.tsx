import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  BookOpen,
  Bot,
  Users,
  Award,
  Zap,
  Headphones,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import heroImg from "@/assets/hero-dashboard.jpg";
import appImg from "@/assets/app-mockup.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Excelencia Educativa · Libros, plataforma digital y tutor IA" },
      {
        name: "description",
        content:
          "Transformamos libros en experiencias de aprendizaje. Editorial colombiana con plataforma digital, app móvil e inteligencia artificial para instituciones educativas.",
      },
      { property: "og:title", content: "Excelencia Educativa · Ecosistema EdTech" },
      {
        property: "og:description",
        content: "Libros, plataforma y tutor IA para instituciones educativas en Colombia.",
      },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "+500K", label: "Estudiantes impactados" },
  { value: "1,200+", label: "Instituciones aliadas" },
  { value: "800K+", label: "Libros distribuidos" },
  { value: "25+", label: "Años de experiencia" },
  { value: "100%", label: "Cobertura nacional" },
];

const strengths = [
  {
    icon: BookOpen,
    title: "Contenidos propios",
    desc: "Libros creados por pedagogos colombianos, adaptados al currículo nacional.",
  },
  {
    icon: Layers,
    title: "Editoriales aliadas",
    desc: "Complementamos con sellos reconocidos para cubrir todas las áreas y grados.",
  },
  {
    icon: Bot,
    title: "Inteligencia Artificial",
    desc: "Tutor IA que resuelve dudas, explica y guía al estudiante en tiempo real.",
  },
  {
    icon: Zap,
    title: "Plataforma interactiva",
    desc: "Videos, audios, juegos, evaluaciones y certificados en un solo lugar.",
  },
  {
    icon: Headphones,
    title: "Soporte especializado",
    desc: "Acompañamiento continuo a docentes e instituciones durante todo el año.",
  },
  {
    icon: Award,
    title: "Innovación educativa",
    desc: "Metodologías activas, gamificación y analítica de aprendizaje.",
  },
];

const catalog = [
  { area: "Matemáticas", grade: "Primaria 3°", title: "Aventura Matemática" },
  { area: "Inglés", grade: "Preescolar", title: "Skyline Kids" },
  { area: "Ciencias", grade: "Secundaria 9°", title: "Ecosistemas Globales" },
  { area: "Español", grade: "Primaria 5°", title: "Trazo Creativo" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* HERO */}
      <section className="relative px-6 pt-20 pb-16 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center animate-fade-up">
          <span className="eyebrow mb-6">EdTech · Editorial · Innovación</span>
          <h1 className="mt-4 text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-balance">
            Transformamos libros en <span className="text-brand">experiencias</span> de aprendizaje.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            El ecosistema digital que conecta instituciones, docentes y estudiantes de toda Colombia
            con contenidos, tecnología e inteligencia artificial.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/catalogo" className="btn-primary w-full sm:w-auto">
              Conocer nuestros libros
            </Link>
            <Link to="/app" className="btn-secondary w-full sm:w-auto">
              Conocer nuestra App
            </Link>
            <Link to="/asesoria" className="btn-ghost w-full sm:w-auto">
              Agendar asesoría <ArrowRight className="ml-1 size-4" />
            </Link>
          </div>
        </div>

        <div className="mt-20 max-w-6xl mx-auto animate-fade-up [animation-delay:150ms]">
          <div className="relative rounded-t-3xl border-x border-t border-border bg-card shadow-elevated overflow-hidden">
            <img
              src={heroImg}
              alt="Ecosistema digital de Excelencia Educativa"
              width={1600}
              height={900}
              className="w-full aspect-[16/9] object-cover"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-foreground text-background py-14">
        <div className="container-page grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-mono text-2xl md:text-3xl font-semibold text-brand-soft">
                {s.value}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-background/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STRENGTHS */}
      <section className="py-24">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Por qué elegirnos</span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight">
              Un ecosistema completo, no solo libros.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              La intersección entre pedagogía tradicional, tecnología y acompañamiento humano.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((s) => (
              <div
                key={s.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-brand/50 hover:shadow-card transition-all"
              >
                <div className="size-11 rounded-xl bg-brand-soft text-brand grid place-items-center group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                  <s.icon className="size-5" />
                </div>
                <h3 className="mt-6 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG PREVIEW */}
      <section className="py-24 bg-surface/60 border-y border-border">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <span className="eyebrow">Catálogo inteligente</span>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight">
                Material pedagógico para cada etapa.
              </h2>
            </div>
            <Link to="/catalogo" className="btn-secondary">
              Ver todo el catálogo <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {catalog.map((b) => (
              <div
                key={b.title}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-card transition-all"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-brand-soft to-surface-strong grid place-items-center border-b border-border">
                  <div className="text-center px-4">
                    <BookOpen className="size-8 text-brand mx-auto mb-2 opacity-60" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                      {b.area}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-[10px] font-mono text-brand font-semibold uppercase">
                    {b.grade}
                  </span>
                  <h4 className="mt-1 font-bold text-sm">{b.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APP & AI */}
      <section className="py-24">
        <div className="container-page grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="eyebrow flex items-center gap-2">
              <Sparkles className="size-3" /> Ecosistema móvil + IA
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Tu aula en el bolsillo, potenciada por IA.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              La aplicación móvil convierte cada libro en un tutor personalizado que motiva, guía y
              corrige en tiempo real.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Tutor IA para resolución de dudas 24/7",
                "Gamificación por logros y medallas",
                "Videos, audios y actividades interactivas",
                "Certificados y seguimiento del progreso",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-[oklch(0.72_0.18_155)] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/app" className="btn-primary">
                Conocer la app
              </Link>
              <Link to="/ia" className="btn-secondary">
                Ver Tutor IA
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-brand/5 rounded-[40px] -rotate-2" />
            <img
              src={appImg}
              alt="App móvil Excelencia Educativa"
              width={900}
              height={1200}
              loading="lazy"
              className="relative w-full max-w-[400px] mx-auto rounded-[2rem] shadow-elevated"
            />
          </div>
        </div>
      </section>

      {/* IMPACT / TESTIMONIALS */}
      <section className="py-24 bg-surface/60 border-y border-border">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Casos de éxito</span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight">
              Voces de la comunidad educativa.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "La integración de la IA en los libros de Excelencia cambió la forma en que mis alumnos ven las tareas. Ahora es un reto divertido.",
                a: "Dra. María Rojas",
                r: "Rectora · Colegio Campestre El Prado",
              },
              {
                q: "Como institución encontramos en Excelencia un aliado que combina calidad editorial con tecnología real, no promesas.",
                a: "Carlos Méndez",
                r: "Coordinador Académico · Liceo San Ignacio",
              },
            ].map((t) => (
              <figure key={t.a} className="p-8 rounded-2xl bg-card border border-border">
                <blockquote className="text-lg leading-relaxed text-foreground">“{t.q}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="size-10 rounded-full bg-brand-soft grid place-items-center text-brand font-bold">
                    {t.a[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.a}</div>
                    <div className="text-xs text-muted-foreground">{t.r}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24">
        <div className="container-page">
          <div className="p-12 md:p-20 rounded-3xl bg-brand text-brand-foreground text-center relative overflow-hidden">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-[10px] font-mono uppercase tracking-widest">
                <Users className="size-3" /> Para instituciones educativas
              </span>
              <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
                ¿Listo para transformar tu institución?
              </h2>
              <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto">
                Agenda una asesoría gratuita. Un asesor comercial se comunicará contigo en menos de
                24 horas.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/asesoria"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-brand font-bold hover:shadow-xl transition-all"
                >
                  Agendar asesoría gratuita
                </Link>
                <Link
                  to="/cotizacion"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 text-white font-semibold ring-1 ring-white/20 hover:bg-white/20 transition-all"
                >
                  Solicitar cotización
                </Link>
              </div>
            </div>
            <div className="absolute -top-24 -right-24 size-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 size-96 rounded-full bg-black/10 blur-3xl" />
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
