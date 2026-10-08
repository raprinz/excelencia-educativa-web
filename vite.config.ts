import { defineConfig } from "vite";

import tailwindcss from "@tailwindcss/vite";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },

  server: {
    host: "0.0.0.0",

    allowedHosts: [
      ".trycloudflare.com",
    ],
  },

  plugins: [
    tailwindcss(),

    tanstackStart({
      server: {
        entry: "server",
      },
    }),

    viteReact(),
  ],
});