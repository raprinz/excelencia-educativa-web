import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  Play,
  Instagram,
  Facebook,
  Linkedin,
  Music2,
} from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { canonicalLink, pageSocialMeta } from "@/lib/seo";

import videoPromocional from "@/assets/Video Promocional.mp4";

/*
 * REDES SOCIALES
 *
 * Instagram ya tiene su enlace.
 * Las demás redes llevan temporalmente al inicio
 * hasta que se creen los perfiles oficiales.
 */
const socialLinks = [
  {
    name: "Instagram",
    username: "@excelenciaeducativasas",
    icon: Instagram,
    href: "https://www.instagram.com/excelenciaeducativasas?stkn=dTljbDA4N2JuY3Z3",
    external: true,
  },
  {
    name: "Facebook",
    username: "@excelenciaeducativasas",
    icon: Facebook,
    href: "/",
    external: false,
  },
  {
    name: "TikTok",
    username: "@excelenciaeducativasas",
    icon: Music2,
    href: "/",
    external: false,
  },
  {
    name: "LinkedIn",
    username: "@excelenciaeducativasas",
    icon: Linkedin,
    href: "/",
    external: false,
  },
];

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros · Excelencia Educativa" },
      {
        name: "description",
        content:
          "Historia, misión, visión y valores de Excelencia Educativa, editorial colombiana en transformación digital.",
      },
      {
        property: "og:title",
        content: "Nosotros · Excelencia Educativa",
      },
      {
        property: "og:description",
        content:
          "Editorial colombiana con más de 15 años transformando la educación.",
      },
      ...pageSocialMeta(
        "/nosotros",
        "Nosotros · Excelencia Educativa",
        "Editorial colombiana con más de 15 años transformando la educación.",
      ),
    ],
    links: [canonicalLink("/nosotros")],
  }),
  component: Page,
});

const timeline = [
  {
    year: "1999",
    text: "Nace una idea de conformar Excelencia Educativa.",
  },
  {
    year: "2011",
    text: "Somos Conformados Legalmente.",
  },
  {
    year: "2012",
    text: "Lanzamiento de los primeros títulos propios para primaria.",
  },
  {
    year: "2015",
    text: "Alianzas estratégicas con editoriales internacionales.",
  },
  {
    year: "2020",
    text: "Inicio de la transformación digital y contenidos interactivos.",
  },
  {
    year: "2026",
    text: "Lanzamiento de la plataforma con Tutor de Inteligencia Artificial.",
  },
];

const valueItems = [
  "Excelencia",
  "Innovación",
  "Compromiso",
  "Cercanía",
  "Responsabilidad social",
];

function Page() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [started, setStarted] = useState(false);
  const [firstPlayFinished, setFirstPlayFinished] = useState(false);

  const handleStartVideo = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      video.muted = false;
      video.currentTime = 0;

      await video.play();

      setStarted(true);
    } catch (error) {
      console.error("No se pudo reproducir el video:", error);
    }
  };

  const handleVideoEnded = () => {
    const video = videoRef.current;

    if (!video) return;

    /*
     * Después de la primera reproducción:
     * el video continúa automáticamente,
     * pero sin sonido.
     */
    setFirstPlayFinished(true);

    video.muted = true;
    video.currentTime = 0;

    video.play().catch((error) => {
      console.error("No se pudo continuar el video:", error);
    });
  };

  return (
    <PageShell
      eyebrow="Nosotros"
      title="Más de 15 años acompañando la educación en Colombia."
      description="Somos una editorial colombiana que hoy se reinventa como empresa EdTech: libros, plataforma digital e inteligencia artificial en un solo ecosistema."
    >
      {/* =========================================================
          MISIÓN, VISIÓN Y VALORES
      ========================================================= */}

      <div className="grid md:grid-cols-3 gap-6 mb-20">

        {/* MISIÓN */}
        <div className="p-8 rounded-2xl bg-card border border-border hover:border-brand/40 hover:shadow-card transition-all">
          <h3 className="text-xl font-bold">
            Misión
          </h3>

          <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-justify">
            Nuestra misión es proporcionar textos escolares adaptados a las
            necesidades del currículo educativo, que fomenten la excelencia
            académica, el pensamiento crítico y la creatividad en estudiantes
            de todas las edades. Nos comprometemos a trabajar en colaboración
            con educadores y expertos en pedagogía para desarrollar materiales
            didácticos actualizados, accesibles y relevantes, que contribuyan
            al éxito educativo y al crecimiento personal de cada estudiante.
          </p>
        </div>

        {/* VISIÓN */}
        <div className="p-8 rounded-2xl bg-card border border-border hover:border-brand/40 hover:shadow-card transition-all">
          <h3 className="text-xl font-bold">
            Visión
          </h3>

          <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-justify">
            En el 2035 seremos la principal empresa de fuente de recursos
            educativos a nivel nacional, ofreciendo textos escolares
            innovadores y de alta calidad que impulsen la educación y el
            desarrollo integral de estudiantes en todas las etapas educativas
            desde el ser y el saber.
          </p>
        </div>

        {/* VALORES */}
        <div className="p-8 rounded-2xl bg-card border border-border hover:border-brand/40 hover:shadow-card transition-all">
          <h3 className="text-xl font-bold">
            Valores
          </h3>

          <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
            {valueItems.map((value) => (
              <li
                key={value}
                className="flex items-center gap-3"
              >
                <span className="size-2 rounded-full bg-brand shrink-0" />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* =========================================================
          LÍNEA DE TIEMPO + VIDEO
      ========================================================= */}

      <div className="grid lg:grid-cols-2 gap-16 items-start">

        {/* =======================================================
            LÍNEA DE TIEMPO
        ======================================================= */}

        <div className="max-w-3xl">
          <span className="eyebrow">
            Línea de tiempo
          </span>

          <h2 className="mt-4 text-3xl font-extrabold">
            Nuestra evolución
          </h2>

          <p className="mt-4 text-muted-foreground max-w-xl">
            Una historia construida a través de la educación, la innovación y
            nuestro compromiso con las instituciones y estudiantes de Colombia.
          </p>

          <ol className="mt-10 relative border-l-2 border-border pl-8 space-y-10">
            {timeline.map((t) => (
              <li
                key={t.year}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1 size-4 rounded-full bg-brand ring-4 ring-background" />

                <div className="font-mono text-brand font-semibold">
                  {t.year}
                </div>

                <p className="mt-1 text-foreground">
                  {t.text}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* =======================================================
            VIDEO PROMOCIONAL
        ======================================================= */}

        <div className="flex flex-col items-center">

          <div className="relative w-full max-w-[380px] rounded-3xl border border-border bg-card overflow-hidden shadow-card">

            <video
              ref={videoRef}
              src={videoPromocional}
              playsInline
              controls={started}
              onEnded={handleVideoEnded}
              className="w-full h-auto object-contain"
            />

            {/* BOTÓN INICIAL */}
            {!started && (
              <button
                type="button"
                onClick={handleStartVideo}
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/25 hover:bg-black/35 transition-all"
                aria-label="Reproducir presentación"
              >
                <span className="size-16 rounded-full bg-white text-brand shadow-xl flex items-center justify-center hover:scale-105 transition-transform">
                  <Play className="size-7 fill-current ml-1" />
                </span>

                <span className="mt-4 px-5 py-2 rounded-full bg-black/60 text-white text-sm font-semibold backdrop-blur-sm">
                  Reproducir presentación
                </span>

                <span className="mt-2 text-xs text-white/90">
                  Con sonido
                </span>
              </button>
            )}

            {/* INDICADOR DESPUÉS DE LA PRIMERA REPRODUCCIÓN */}
            {firstPlayFinished && (
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/60 text-white text-[10px] font-medium backdrop-blur-sm">
                Reproducción automática · Silencio
              </div>
            )}
          </div>
        </div>
      </div>

      {/* =========================================================
          REDES SOCIALES
      ========================================================= */}

      <div className="mt-20 pt-12 border-t border-border">

        <div className="text-center max-w-2xl mx-auto">

          <span className="eyebrow">
            Síguenos
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight">
            Conoce más en nuestras redes sociales
          </h2>

          <p className="mt-3 text-muted-foreground">
            Descubre nuestras novedades, proyectos y experiencias educativas.
          </p>

        </div>

        {/* TARJETAS DE REDES */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">

          {socialLinks.map((social) => {
            const Icon = social.icon;

            return social.external ? (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-card border border-border hover:border-brand/50 hover:shadow-card transition-all"
              >
                <div className="size-11 rounded-xl bg-brand-soft text-brand grid place-items-center group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                  <Icon className="size-5" />
                </div>

                <div className="mt-5 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  {social.name}
                </div>

                <div className="mt-1 text-sm font-semibold">
                  {social.username}
                </div>
              </a>
            ) : (
              <Link
                key={social.name}
                to={social.href}
                className="group p-5 rounded-2xl bg-card border border-border hover:border-brand/50 hover:shadow-card transition-all"
              >
                <div className="size-11 rounded-xl bg-brand-soft text-brand grid place-items-center group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                  <Icon className="size-5" />
                </div>

                <div className="mt-5 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  {social.name}
                </div>

                <div className="mt-1 text-sm font-semibold">
                  {social.username}
                </div>
              </Link>
            );
          })}

        </div>
      </div>
    </PageShell>
  );
}
