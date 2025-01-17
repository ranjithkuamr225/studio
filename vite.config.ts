import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/studio/', // Replace with your GitHub repository name
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'index.html', dest: '' }, // Copy index.html to the output directory for 404.html
      ],
    }),
  ],
  build: {
    outDir: 'dist', // Ensure the build output is set correctly
    emptyOutDir: true, // Clears old builds before generating a new one
  },
});
