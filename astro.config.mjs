import path from 'node:path';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://opensource.cs.duth.gr",
  integrations: [
    react(), 
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "github-dark-dimmed",
      },
      gfm: true,
    }), 
    icon(), 
    sitemap(), 
    tailwind({
      applyBaseStyles: false,
    }), 
  ],
  output: 'static',
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
    server: {
      allowedHosts: ['opensource.leokratis.tech', 'osduth.leokratis.tech'],
    },
  },
  i18n: {
    locales: ["en", "el"],
    defaultLocale: 'en',
    fallback: {
      el: "en"
    }
  }
});