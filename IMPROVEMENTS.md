# Performance Improvements Plan

This document outlines non-breaking, design- and functionality-preserving optimizations to improve performance, Core Web Vitals, bundle size, and runtime efficiency across the site.

## 1) Images and Media
- Use modern formats (WebP/AVIF) alongside fallbacks for images in `public/images` and `src/assets` via Astro Image (`@astrojs/image/components`).
  - Replace `<img>` with `<Image />` where possible to enable automatic format selection, responsive sizing, and lazy-loading.
  - Generate multiple sizes and `srcset` for hero, blog thumbnails, and cards.
- Add `loading="lazy"` and `decoding="async"` to non-critical `<img>`.
- Preload above-the-fold hero/brand images (as appropriate) with `<link rel="preload" as="image">` for the landing page only.
- Compress static assets via an image optimization step (e.g., `sharp` + `squoosh-cli`) in CI.

## 2) Fonts
- Self-host Inter already in use; ensure optimal loading:
  - Add `font-display: swap` (already applied) and `unicode-range` subsets for latin/greek to reduce transfer size.
  - Preload critical font files (`/public/fonts/*.woff2`) used above the fold.
  - Remove Google Fonts network dependency by fully self-hosting Inter weights in `/public/fonts` (optional but recommended for privacy/perf).
- Consider variable font (Inter VF) to replace multiple weights and reduce requests.

## 3) CSS
- Purge unused Tailwind classes (default in production) and ensure `content` paths in `tailwind.config.cjs` cover all template locations.
- Extract critical CSS for the landing page (Astro supports per-page CSS; keep component CSS scoped).
- Minify and compress CSS with default Astro/Vite pipeline; verify no global blocking CSS.
- Avoid duplicate rules; the custom scrollbar is defined twice—keep one instance to reduce CSS size.

## 4) JavaScript
- Prefer Astro Island hydration strategies for interactive components only when needed:
  - Use `client:idle`, `client:visible`, or `client:media` where appropriate for `*.tsx` interactive parts (navigation, theme toggle, TOC).
  - Ensure no hydration for purely static components.
- Audit dependencies in `package.json`; remove unused libraries. Enable `build.rollupOptions.treeshake: true` if not already.
- Split vendor chunks and enable manual chunking for large libraries in `vite.config.js`.
- Use `import.meta.env.PROD` guards to avoid dev-only logic in production bundles.

## 5) HTML and Metadata
- Ensure `lang` attribute and `dir` where applicable; keep `preconnect`/`dns-prefetch` for critical origins (only if still using Google Fonts/CDNs).
- Add `rel="preload"` for critical CSS and fonts used above the fold.
- Ensure all external scripts are `defer` or `async` and loaded conditionally.

## 6) Caching & Headers
- Leverage immutable caching for hashed assets (`/dist`, images, fonts). Configure:
  - `Cache-Control: public, max-age=31536000, immutable` for hashed assets.
  - `Cache-Control: public, max-age=3600` for HTML.
  - Ensure `nginx.conf`/`web.config` mirror these rules.
- Add `ETag`/`Last-Modified` where applicable on the server.

## 7) Images in Markdown/MDX
- Use `astro:assets` and MDX integration to transform markdown images with automatic `srcset` and lazy-loading.
- Provide width/height to avoid CLS.

## 8) Accessibility and CWV
- Provide width/height for all images to stabilize layout.
- Validate CLS contributors: reserve space for dynamic content (e.g., TOC, nav).
- Ensure FID/INP improvements by deferring non-critical JS and minimizing main-thread work.

## 9) SEO / Social
- Generate per-page `<meta>` tags, OpenGraph images statically; avoid runtime generation when possible.
- Pre-render RSS (`pages/rss.xml.js`) efficiently; cache on server where applicable.

## 10) Build and Compression
- Enable Brotli and Gzip precompression for `dist` assets during build (Vite plugin `vite-plugin-compression`), then serve with `nginx`.
- Verify source maps are disabled in production to reduce build artifact size.

## 11) Internationalization
- Only load locale-specific bundles for the current language; code-split locale files in `src/config/i18n`.
- Lazy-load translations on routes that need them; fall back to static content for default locale when possible.

## 12) Content and Routing
- Remove unused example content from production builds using Astro collections and route-level pruning.
- Ensure all routes are statically generated where possible (SSG) to avoid SSR costs.

## 13) Icons
- Use an icon sprite or `astro-icon` with tree-shaking; inline critical icons to reduce requests.
- Convert large SVGs to optimized versions (SVGO) and ensure `fill="currentColor"` for theme consistency.

## 14) Third-party
- Audit third-party scripts; remove non-essential ones.
- Load analytics with `defer`, consent guard, and `client:idle` to reduce contention.

## 15) Scroll behavior
- Maintain custom scrollbar but scope it to `html` to avoid duplications and reduce global style cost; ensure no reflow triggers.

## 16) Testing and Monitoring
- Add Lighthouse CI (GitHub Action) to gate PRs on performance budgets.
- Add `bundle-buddy`/`rollup-plugin-visualizer` to monitor bundle size changes.
- Set performance budgets for JS (<= 150KB gzipped per route), CSS (<= 80KB), and image hints.

---

# Concrete Action Checklist

1. Images
   - Integrate `@astrojs/image` and migrate key images to `<Image />`.
   - Compress `public/images/**/*` and `src/assets/**/*` via CI.
2. Fonts
   - Preload and self-host critical WOFF2, add unicode-range subsets.
3. CSS
   - Remove duplicate scrollbar CSS; keep one scoped definition.
4. JS
   - Add island hydration strategies; audit and trim dependencies.
   - Configure manualChunks in `vite.config.js`.
5. Build
   - Add Brotli/Gzip precompression plugin for Vite.
6. Server
   - Update `public/nginx.conf` with strong cache headers for static assets.
7. Monitoring
   - Add Lighthouse CI and bundle visualizer.

All above changes preserve the visual design and behaviors, focusing solely on loading performance, runtime efficiency, and stability.
