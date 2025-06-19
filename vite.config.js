import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // raíz del proyecto (opcional si ya estás en la raíz)
  publicDir: 'public', // carpeta pública (ya por defecto, pero lo hacemos explícito)
  build: {
    outDir: 'dist', // salida de build
  },
});
