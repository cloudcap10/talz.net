import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://talz.net',
  vite: {
    plugins: [tailwindcss()],
  },
});
