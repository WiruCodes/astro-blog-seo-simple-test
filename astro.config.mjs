import { defineConfig } from "astro/config";

// Integrations
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";
import robots from "astro-robots-txt";
import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // REQUIRED for sitemap + SEO
  site: "https://your-site.com",

  integrations: [
    vue(),
    sitemap(),
    robots({
      policy: [{ userAgent: "*", allow: "/" }],
    }),
    mdx(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});