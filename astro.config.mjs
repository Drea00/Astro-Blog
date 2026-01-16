// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind'; // 👈 Standard integration

export default defineConfig({
  output: 'server',
  
  integrations: [
    tailwind() // 👈 Moves from "vite plugins" to "integrations"
  ],

  adapter: node({
    mode: 'standalone'
  })
});