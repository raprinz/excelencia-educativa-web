import type { ReactNode } from "react";
import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";
import { WhatsAppFab } from "./whatsapp-fab";

export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <header className="border-b border-border bg-surface/40">
        <div className="container-page py-20 max-w-4xl">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-balance">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl text-pretty">
              {description}
            </p>
          )}
        </div>
      </header>
      <main className="container-page py-16">{children}</main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
