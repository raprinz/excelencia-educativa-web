
import { createFileRoute } from "@tanstack/react-router";

const BASE_URL = "https://excelenciaeducativa.co";

const pages = [
  { path: "/", priority: "1.0" },
  { path: "/catalogo", priority: "0.9" },
  { path: "/nosotros", priority: "0.8" },
  { path: "/contacto", priority: "0.8" },
  { path: "/plataforma", priority: "0.8" },
  { path: "/blog", priority: "0.8" },
  { path: "/ia", priority: "0.7" },
  { path: "/asesoria", priority: "0.7" },
  { path: "/app", priority: "0.6" },
  { path: "/carreras", priority: "0.6" },
  { path: "/cotizacion", priority: "0.5" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = pages
          .map(
            ({ path, priority }) => `
  <url>
    <loc>${BASE_URL}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`,
          )
          .join("");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});

