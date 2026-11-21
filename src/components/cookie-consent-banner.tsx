import { useEffect, useState } from "react";

const CONSENT_KEY = "ee-cookie-choice-v1";
const CONSENT_TTL = 365 * 24 * 60 * 60 * 1000;

type CookieChoice = {
  choice: "all" | "essential";
  savedAt: number;
};

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CONSENT_KEY);
      const choice = saved ? (JSON.parse(saved) as CookieChoice) : null;
      setVisible(!choice || Date.now() - choice.savedAt >= CONSENT_TTL);
    } catch {
      setVisible(true);
    }
  }, []);

  const choose = (choice: CookieChoice["choice"]) => {
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify({ choice, savedAt: Date.now() }));
    } catch {
      // The visitor can still dismiss the notice if browser storage is unavailable.
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Aviso de cookies y almacenamiento local"
      aria-live="polite"
      className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-3xl rounded-2xl border border-border bg-background p-5 shadow-2xl sm:inset-x-6 sm:bottom-6 sm:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <h2 className="font-bold text-foreground">Cookies y almacenamiento local</h2>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Usamos almacenamiento necesario para conservar tu cotización y recordar esta elección.
            No activamos analítica ni publicidad. Navegar por el sitio no cuenta como aceptación.
            <a
              href="/cookies"
              className="ml-1 font-semibold text-brand underline underline-offset-2"
            >
              Lee la política de cookies.
            </a>
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <button
            type="button"
            onClick={() => choose("essential")}
            className="rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-surface"
          >
            Solo necesarias
          </button>
          <button
            type="button"
            onClick={() => choose("all")}
            className="rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground hover:opacity-90"
          >
            Aceptar
          </button>
        </div>
      </div>
    </aside>
  );
}
