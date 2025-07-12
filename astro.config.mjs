// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Configuración para Netlify (sin base)
  site: 'https://remarkable-lebkuchen-9e84f9.netlify.app',
  build: {
    assets: 'assets'
  }
});
