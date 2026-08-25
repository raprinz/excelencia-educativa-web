import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import appImg from "@/assets/app-mockup.jpg";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "App móvil · Excelencia Educativa" },
      {
        name: "description",
        content:
          "Nuestra aplicación móvil convierte cada libro en un tutor personal con IA, gamificación y progreso en tiempo real.",
      },
      { property: "og:title", content: "App móvil · Excelencia Educativa" },
      { property: "og:description", content: "Aprende, juega y avanza desde tu celular." },
    ],
  }),
  component: Page,
});

const screens = [
  "Bienvenida",
  "Inicio de sesión",
  "Mis Cursos",
  "Mi Progreso",
  "Tutor IA",
  "Certificados",
];

function Page() {
  return (
    <PageShell
      eyebrow="Nuestra App"
      title="Aprende, juega y avanza desde tu celular."
      description="Disponible para Android e iOS. Sincroniza el progreso con cada libro y ofrece un tutor con IA siempre disponible."
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="grid grid-cols-2 gap-3">
            {screens.map((s) => (
              <div key={s} className="p-5 rounded-xl bg-card border border-border">
                <div className="text-xs font-mono uppercase text-brand font-semibold">Pantalla</div>
                <div className="mt-1 font-bold">{s}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex gap-3">
            <a href="#" className="btn-primary">
              App Store
            </a>
            <a href="#" className="btn-secondary">
              Google Play
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-brand/5 rounded-[40px] rotate-3" />
          <img
            src={appImg}
            alt="Mockup App"
            width={900}
            height={1200}
            loading="lazy"
            className="relative w-full max-w-[380px] mx-auto rounded-[2rem] shadow-elevated"
          />
        </div>
      </div>
    </PageShell>
  );
}
