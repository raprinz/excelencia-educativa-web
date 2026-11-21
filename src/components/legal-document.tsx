import type { ReactNode } from "react";
import { PageShell } from "@/components/page-shell";

export type LegalSection = {
  title: string;
  content: ReactNode;
};

export function LegalDocument({
  eyebrow = "Información legal",
  title,
  intro,
  sections,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <PageShell eyebrow={eyebrow} title={title} description={intro}>
      <article className="mx-auto max-w-4xl space-y-10 text-base leading-7 text-muted-foreground">
        <p className="text-sm">Última actualización: 21 de noviembre de 2026</p>
        {sections.map((section) => (
          <section key={section.title} className="space-y-3">
            <h2 className="text-xl font-bold leading-tight text-foreground sm:text-2xl">
              {section.title}
            </h2>
            {section.content}
          </section>
        ))}
      </article>
    </PageShell>
  );
}

export function LegalList({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-2 pl-6">{children}</ul>;
}
