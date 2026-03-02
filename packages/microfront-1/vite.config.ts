import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pkg from './package.json'


export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    cssCodeSplit: false,
    rollupOptions: {
      input: 'src/main.tsx',
      preserveEntrySignatures: 'exports-only', // 🔥 CLAVE
      output: {
        format: 'system',
        entryFileNames: `${pkg.name}.system.js`,
      },
    },
  },
});
