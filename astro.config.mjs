import path from 'node:path';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import simpleStackForm from "simple-stack-form";

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
    simpleStackForm()
  ],
  output: 'static',
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
    server: {
      allowedHosts: ['pc.leokratis.tech', 'osduth.leokratis.tech'],
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