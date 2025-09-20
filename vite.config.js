import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
  server: {
    open: '/dist/index.html'
  }
})