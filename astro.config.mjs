// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// URL pública donde se publicará la web (necesaria para el sitemap, canonical y Open Graph).
// Cámbiala aquí o define SITE_URL en el entorno de build.
const SITE_URL = process.env.SITE_URL ?? 'https://feramia.github.io';

export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-ES', en: 'en-US' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
