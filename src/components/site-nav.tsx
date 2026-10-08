import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const CALENDAR_URL =
  "https://calendar.app.google/R6k47XomnM8xmcag6";

const links = [
  { to: "/catalogo", label: "Catálogo" },
  { to: "/plataforma", label: "Plataforma" },
  { to: "/app", label: "App" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-page h-16 flex items-center justify-between">

        {/* LOGO + NOMBRE */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="Logo Excelencia Educativa"
            className="size-18 object-contain relative -top-1"
          />

          <span className="font-semibold tracking-tight text-base">
            Excelencia <span className="text-brand">Educativa</span>
          </span>
        </Link>

        {/* MENÚ PARA COMPUTADOR */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* BOTÓN DE ASESORÍA PARA COMPUTADOR */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Agendar asesoría
          </a>
        </div>

        {/* BOTÓN MENÚ PARA CELULAR */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-surface"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </button>
      </div>

      {/* MENÚ DESPLEGABLE PARA CELULAR */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-page py-4 flex flex-col gap-3">

            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}

            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Agendar asesoría
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}