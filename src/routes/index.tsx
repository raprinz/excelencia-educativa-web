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
import { canonicalLink, pageSocialMeta } from "@/lib/seo";

// ============================================================
// PORTADAS DEL CATÁLOGO
// ============================================================

import bitacoras6 from "@/assets/Portadas Libros/BITACORAS - 6.jpg";
import bitacoras7 from "@/assets/Portadas Libros/BITACORAS - 7.jpg";
import bitacoras8 from "@/assets/Portadas Libros/BITACORAS - 8.jpg";
import bitacoras9 from "@/assets/Portadas Libros/BITACORAS - 9.jpg";

import brushA from "@/assets/Portadas Libros/Brush ART A.png";
import brushB from "@/assets/Portadas Libros/Brush ART B.png";
import brushC from "@/assets/Portadas Libros/Brush ART C.png";
import brushD from "@/assets/Portadas Libros/Brush ART D.png";
import brushE from "@/assets/Portadas Libros/Brush ART E.png";

import dimensionMatematicaC from "@/assets/Portadas Libros/Dimension Matematica C.png";
import dimensionCognitivaB from "@/assets/Portadas Libros/Dimensión Cognitiva B.png";
import dimensionSerieC from "@/assets/Portadas Libros/Dimensión Serie C.png";

import inteligencia1 from "@/assets/Portadas Libros/Inteligencia Lectora 1.jpg";
import inteligencia2 from "@/assets/Portadas Libros/Inteligencia Lectora 2.jpg";
import inteligencia3 from "@/assets/Portadas Libros/Inteligencia Lectora 3.jpg";
import inteligencia4 from "@/assets/Portadas Libros/Inteligencia Lectora 4.jpg";
import inteligencia5 from "@/assets/Portadas Libros/Inteligencia Lectora 5.jpg";

import pincelA from "@/assets/Portadas Libros/Pincel ART A1.jpg";
import pincelB from "@/assets/Portadas Libros/Pincel ART B2.jpg";
import pincelC from "@/assets/Portadas Libros/Pincel ART C3.jpg";
import pincelD from "@/assets/Portadas Libros/Pincel ART D4.jpg";
import pincelE from "@/assets/Portadas Libros/Pincel ART E5.jpg";

import proyeccion1 from "@/assets/Portadas Libros/Proyeccion Matematica 1.jpg";
import proyeccion2 from "@/assets/Portadas Libros/Proyeccion Matematica 2.jpg";
import proyeccion3 from "@/assets/Portadas Libros/Proyeccion Matematica 3.jpg";
import proyeccion4 from "@/assets/Portadas Libros/Proyeccion Matematica 4.jpg";
import proyeccion5 from "@/assets/Portadas Libros/Proyeccion Matematica 5.jpg";

// ============================================================
// VIDEO APP
// ============================================================

const appVideo = new URL(
  "../assets/app-demo.mp4",
  import.meta.url,
).href;

// ============================================================
// ENLACE DE AGENDA
// ============================================================

const CALENDAR_URL =
  "https://calendar.app.google/R6k47XomnM8xmcag6";

// ============================================================
// RUTA
// ============================================================

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Excelencia Educativa · Libros, plataforma digital y tutor IA",
      },
      {
        name: "description",
        content:
          "Conectamos textos, tecnología y experiencias para transformar el aprendizaje. Editorial colombiana con plataforma digital, app móvil e inteligencia artificial para instituciones educativas.",
      },
      {
        property: "og:title",
        content: "Excelencia Educativa · Ecosistema EdTech",
      },
      {
        property: "og:description",
        content:
          "Libros, plataforma y tutor IA para instituciones educativas en Colombia.",
      },
      ...pageSocialMeta(
        "/",
        "Excelencia Educativa · Ecosistema EdTech",
        "Libros, plataforma y tutor IA para instituciones educativas en Colombia.",
      ),
    ],
    links: [canonicalLink("/")],
  }),
  component: Home,
});

// ============================================================
// ESTADÍSTICAS
// ============================================================

const stats = [
  {
    value: "+450K",
    label: "Estudiantes impactados",
  },
  {
    value: "76+",
    label: "Instituciones aliadas",
  },
  {
    value: "800K+",
    label: "Libros distribuidos",
  },
  {
    value: "15+",
    label: "Años de experiencia",
  },
  {
    value: "100%",
    label: "Cobertura nacional",
  },
];

// ============================================================
// FORTALEZAS
// ============================================================

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

// ============================================================
// CATÁLOGO
// ============================================================

const catalog = [
  {
    title: "Dimensión Cognitiva",
    area: "Desarrollo cognitivo",
    grade: "Transición",
    cover: dimensionCognitivaB,
  },
  {
    title: "Dimensión Matemática",
    area: "Matemáticas",
    grade: "Transición",
    cover: dimensionMatematicaC,
  },
  {
    title: "Dimensión Serie",
    area: "Matemáticas",
    grade: "Transición",
    cover: dimensionSerieC,
  },
  {
    title: "Brush ART A",
    area: "Arte",
    grade: "1°",
    cover: brushA,
  },
  {
    title: "Brush ART B",
    area: "Arte",
    grade: "2°",
    cover: brushB,
  },
  {
    title: "Brush ART C",
    area: "Arte",
    grade: "3°",
    cover: brushC,
  },
  {
    title: "Brush ART D",
    area: "Arte",
    grade: "4°",
    cover: brushD,
  },
  {
    title: "Brush ART E",
    area: "Arte",
    grade: "5°",
    cover: brushE,
  },
  {
    title: "Pincel ART A1",
    area: "Arte",
    grade: "1°",
    cover: pincelA,
  },
  {
    title: "Pincel ART B2",
    area: "Arte",
    grade: "2°",
    cover: pincelB,
  },
  {
    title: "Pincel ART C3",
    area: "Arte",
    grade: "3°",
    cover: pincelC,
  },
  {
    title: "Pincel ART D4",
    area: "Arte",
    grade: "4°",
    cover: pincelD,
  },
  {
    title: "Pincel ART E5",
    area: "Arte",
    grade: "5°",
    cover: pincelE,
  },
  {
    title: "Inteligencia Lectora 1",
    area: "Lenguaje",
    grade: "1°",
    cover: inteligencia1,
  },
  {
    title: "Inteligencia Lectora 2",
    area: "Lenguaje",
    grade: "2°",
    cover: inteligencia2,
  },
  {
    title: "Inteligencia Lectora 3",
    area: "Lenguaje",
    grade: "3°",
    cover: inteligencia3,
  },
  {
    title: "Inteligencia Lectora 4",
    area: "Lenguaje",
    grade: "4°",
    cover: inteligencia4,
  },
  {
    title: "Inteligencia Lectora 5",
    area: "Lenguaje",
    grade: "5°",
    cover: inteligencia5,
  },
  {
    title: "Proyección Matemática 1",
    area: "Matemáticas",
    grade: "1°",
    cover: proyeccion1,
  },
  {
    title: "Proyección Matemática 2",
    area: "Matemáticas",
    grade: "2°",
    cover: proyeccion2,
  },
  {
    title: "Proyección Matemática 3",
    area: "Matemáticas",
    grade: "3°",
    cover: proyeccion3,
  },
  {
    title: "Proyección Matemática 4",
    area: "Matemáticas",
    grade: "4°",
    cover: proyeccion4,
  },
  {
    title: "Proyección Matemática 5",
    area: "Matemáticas",
    grade: "5°",
    cover: proyeccion5,
  },
  {
    title: "Bitácoras 6",
    area: "Arte",
    grade: "6°",
    cover: bitacoras6,
  },
  {
    title: "Bitácoras 7",
    area: "Arte",
    grade: "7°",
    cover: bitacoras7,
  },
  {
    title: "Bitácoras 8",
    area: "Arte",
    grade: "8°",
    cover: bitacoras8,
  },
  {
    title: "Bitácoras 9",
    area: "Arte",
    grade: "9°",
    cover: bitacoras9,
  },
];

// ============================================================
// HOME
// ============================================================

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* ======================================================
          HERO
      ======================================================= */}

      <section className="relative px-6 pt-20 pb-16 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center animate-fade-up">
          <span className="eyebrow mb-6">
            EdTech · Editorial · Innovación
          </span>

          <h1 className="mt-4 max-w-4xl mx-auto text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-balance">
            Conectamos textos,{" "}
            <span className="text-brand">Tecnología</span> y
            Experiencias.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Transformamos el aprendizaje conectando instituciones,
            docentes y estudiantes de toda Colombia con contenidos,
            tecnología e inteligencia artificial.
          </p>

          {/* ==================================================
              ACCIONES PRINCIPALES
          =================================================== */}

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/catalogo"
              className="btn-primary w-full sm:w-auto inline-flex items-center justify-center"
            >
              Conocer nuestros libros
              <ArrowRight className="ml-2 size-4" />
            </Link>

            <Link
              to="/app"
              className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center"
            >
              Conocer nuestra App
              <ArrowRight className="ml-2 size-4" />
            </Link>

            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full sm:w-auto inline-flex items-center justify-center"
            >
              Agendar asesoría
              <ArrowRight className="ml-2 size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================
          IMPACTO
      ======================================================= */}

      <section className="bg-foreground text-background py-14">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((s) => (
              <div
                key={s.label}
                className="text-center"
              >
                <div className="font-mono text-2xl md:text-3xl font-semibold text-brand-soft">
                  {s.value}
                </div>

                <div className="mt-1 text-[10px] uppercase tracking-widest text-background/60">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          FORTALEZAS
      ======================================================= */}

      <section className="py-24">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">
              Por qué elegirnos
            </span>

            <h2 className="mt-4 text-4xl font-extrabold tracking-tight">
              Un ecosistema completo, no solo libros.
            </h2>

            <p className="mt-4 text-muted-foreground text-lg">
              La intersección entre pedagogía tradicional,
              tecnología y acompañamiento.
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

                <h3 className="mt-6 text-lg font-bold">
                  {s.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          CATÁLOGO
      ======================================================= */}

      <section className="py-24 bg-surface/60 border-y border-border">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <span className="eyebrow">
                Catálogo inteligente
              </span>

              <h2 className="mt-4 text-4xl font-extrabold tracking-tight">
                Material pedagógico para cada etapa.
              </h2>
            </div>

            <Link
              to="/catalogo"
              className="btn-secondary shrink-0 inline-flex items-center"
            >
              Ver todo el catálogo
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>

          {/* ==================================================
              VITRINA CONTINUA
          =================================================== */}

          <div className="relative overflow-hidden">
            <style>
              {`
                @keyframes excelencia-catalogo-marquee {
                  from {
                    transform: translateX(0);
                  }

                  to {
                    transform: translateX(-50%);
                  }
                }

                .excelencia-catalogo-track {
                  display: flex;
                  width: max-content;
                  animation: excelencia-catalogo-marquee 55s linear infinite;
                }

                .excelencia-catalogo-track:hover {
                  animation-play-state: paused;
                }

                .excelencia-catalogo-group {
                  display: flex;
                  gap: 20px;
                  padding-right: 20px;
                }

                .excelencia-catalogo-card {
                  width: 280px;
                  flex: 0 0 280px;
                }

                @media (max-width: 1100px) {
                  .excelencia-catalogo-card {
                    width: 240px;
                    flex-basis: 240px;
                  }
                }

                @media (max-width: 767px) {
                  .excelencia-catalogo-track {
                    animation-duration: 42s;
                  }

                  .excelencia-catalogo-card {
                    width: 250px;
                    flex-basis: 250px;
                  }
                }

                @media (prefers-reduced-motion: reduce) {
                  .excelencia-catalogo-track {
                    animation: none;
                  }
                }
              `}
            </style>

            <div className="excelencia-catalogo-track">
              {/* =================================================
                  PRIMERA SECUENCIA
              ================================================== */}

              <div className="excelencia-catalogo-group">
                {catalog.map((book) => (
                  <Link
                    key={`first-${book.title}`}
                    to="/catalogo"
                    className="excelencia-catalogo-card group"
                  >
                    <div className="aspect-[3/4] bg-gradient-to-br from-brand-soft to-surface-strong rounded-2xl border border-border overflow-hidden flex items-center justify-center p-4 group-hover:border-brand/50 group-hover:shadow-card transition-all duration-300">
                      <div className="w-full h-full rounded-xl bg-white/70 border border-border/50 flex items-center justify-center overflow-hidden">
                        <img
                          src={book.cover}
                          alt={`Portada ${book.title}`}
                          loading="lazy"
                          className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    </div>

                    <div className="pt-4 px-1">
                      <span className="text-[10px] font-mono text-brand font-semibold uppercase tracking-widest">
                        {book.area}
                      </span>

                      <h4 className="mt-1 font-bold text-sm leading-tight">
                        {book.title}
                      </h4>

                      <p className="mt-1 text-xs text-muted-foreground">
                        Grado {book.grade}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* =================================================
                  SEGUNDA SECUENCIA
              ================================================== */}

              <div className="excelencia-catalogo-group">
                {catalog.map((book) => (
                  <Link
                    key={`second-${book.title}`}
                    to="/catalogo"
                    className="excelencia-catalogo-card group"
                  >
                    <div className="aspect-[3/4] bg-gradient-to-br from-brand-soft to-surface-strong rounded-2xl border border-border overflow-hidden flex items-center justify-center p-4 group-hover:border-brand/50 group-hover:shadow-card transition-all duration-300">
                      <div className="w-full h-full rounded-xl bg-white/70 border border-border/50 flex items-center justify-center overflow-hidden">
                        <img
                          src={book.cover}
                          alt={`Portada ${book.title}`}
                          loading="lazy"
                          className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    </div>

                    <div className="pt-4 px-1">
                      <span className="text-[10px] font-mono text-brand font-semibold uppercase tracking-widest">
                        {book.area}
                      </span>

                      <h4 className="mt-1 font-bold text-sm leading-tight">
                        {book.title}
                      </h4>

                      <p className="mt-1 text-xs text-muted-foreground">
                        Grado {book.grade}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          APP + IA
      ======================================================= */}

      <section className="py-24">
        <div className="container-page grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="eyebrow flex items-center gap-2">
              <Sparkles className="size-3" />
              Ecosistema móvil + IA
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Tu aula en el bolsillo, potenciada por IA.
            </h2>

            <p className="mt-6 text-lg text-muted-foreground">
              La aplicación móvil convierte cada libro en un tutor
              personalizado que motiva, guía y corrige en tiempo real.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Tutor IA para resolución de dudas 24/7",
                "Gamificación por logros",
                "Videos, audios y actividades interactivas",
                "Certificados y seguimiento del progreso",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="size-5 text-[oklch(0.72_0.18_155)] shrink-0 mt-0.5" />

                  <span className="text-sm font-medium">
                    {t}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/app"
                className="btn-primary"
              >
                Conocer la app
              </Link>

              <Link
                to="/ia"
                className="btn-secondary"
              >
                Ver Tutor IA
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-brand/5 rounded-[40px] -rotate-2" />

            <video
              src={appVideo}
              autoPlay
              muted
              loop
              playsInline
              className="relative w-full max-w-[400px] mx-auto rounded-[2rem] shadow-elevated"
            />
          </div>
        </div>
      </section>

      {/* ======================================================
          TESTIMONIOS
      ======================================================= */}

      <section className="py-24 bg-surface/60 border-y border-border">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">
              Casos de éxito
            </span>

            <h2 className="mt-4 text-4xl font-extrabold tracking-tight">
              Voces de la comunidad educativa.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "La integración de la IA en los libros de Excelencia cambió la forma en que los alumnos ven las tareas. Ahora es un reto divertido.",
                a: "Dra. María Rojas",
                r: "Coordinadora Academica",
              },
              {
                q: "Como institución encontramos en Excelencia un aliado que combina calidad editorial.",
                a: "Carlos Méndez",
                r: "Coordinador Académico",
              },
            ].map((t) => (
              <figure
                key={t.a}
                className="p-8 rounded-2xl bg-card border border-border"
              >
                <blockquote className="text-lg leading-relaxed text-foreground">
                  “{t.q}”
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="size-10 rounded-full bg-brand-soft grid place-items-center text-brand font-bold">
                    {t.a[0]}
                  </div>

                  <div>
                    <div className="text-sm font-semibold">
                      {t.a}
                    </div>

                    <div className="text-xs text-muted-foreground">
                      {t.r}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          CTA FINAL
      ======================================================= */}

      <section className="py-24">
        <div className="container-page">
          <div className="p-12 md:p-20 rounded-3xl bg-brand text-brand-foreground text-center relative overflow-hidden">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-[10px] font-mono uppercase tracking-widest">
                <Users className="size-3" />
                Para instituciones educativas
              </span>

              <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
                ¿Listo para transformar tu institución?
              </h2>

              <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto">
                Agenda una asesoría gratuita. Un asesor se
                comunicará contigo en menos de 24 horas.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-brand font-bold hover:shadow-xl transition-all"
                >
                  Agendar asesoría gratuita
                </a>

                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 text-white font-semibold ring-1 ring-white/20 hover:bg-white/20 transition-all"
                >
                  Solicitar cotización
                </a>
              </div>
            </div>

            <div className="absolute -top-24 -right-24 size-96 rounded-full bg-white/10 blur-3xl" />

            <div className="absolute -bottom-24 -left-24 size-96 rounded-full bg-black/10 blur-3xl" />
          </div>
        </div>
      </section>

      {/* ======================================================
          FOOTER
      ======================================================= */}

      <SiteFooter />

      {/* ======================================================
          WHATSAPP
      ======================================================= */}

      <WhatsAppFab />
    </div>
  );
}
