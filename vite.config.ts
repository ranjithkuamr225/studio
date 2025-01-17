import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/studio/', // Ensure this matches your GitHub repository name
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'index.html', dest: '' }, // Ensure index.html is copied correctly
      ],
    }),
  ],
});
