// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://lukaszrej.github.io",
  base: "/resume",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});