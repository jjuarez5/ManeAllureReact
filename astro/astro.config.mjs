import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://www.themaneallure.com",
  // sitemap() regenerates sitemap.xml on every build, so new service pages
  // get listed automatically instead of being hand-maintained.
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
