import { Link } from "@tanstack/react-router";
import logo from "../assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface/40 mt-24">
      <div className="container-page py-16 grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <img
              src={logo}
              alt="Logo Excelencia Educativa"
              className="size-12 object-contain relative -top-1"
            />

            <span className="font-semibold tracking-tight">
              Excelencia <span className="text-brand">Educativa</span>
            </span>
          </div>

          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            Editorial colombiana en transformación digital. Libros, plataforma educativa e
            inteligencia artificial en un solo ecosistema.
          </p>

          <div className="mt-6 text-xs font-mono text-muted-foreground">
            Barranquilla · Colombia · excelenciaeducativa.edu@gmail.com
          </div>
        </div>

        <div>
          <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
            Producto
          </h4>

          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/catalogo" className="hover:text-brand">
                Catálogo
              </Link>
            </li>
            <li>
              <Link to="/plataforma" className="hover:text-brand">
                Plataforma
              </Link>
            </li>
            <li>
              <Link to="/app" className="hover:text-brand">
                App móvil
              </Link>
            </li>
            <li>
              <Link to="/ia" className="hover:text-brand">
                Tutor IA
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
            Compañía
          </h4>

          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/nosotros" className="hover:text-brand">
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-brand">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/carreras" className="hover:text-brand">
                Trabaja con nosotros
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-brand">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page py-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Excelencia Educativa. Todos los derechos reservados.
          </p>

          <p className="font-mono">Hecho en Colombia 🇨🇴</p>
        </div>
      </div>
    </footer>
  );
}