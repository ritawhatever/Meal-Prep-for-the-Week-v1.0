
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
// Import process explicitly from node:process to ensure Node.js types are correctly used.
import process from 'node:process';

export default defineConfig(({ mode }) => {
  // Use the imported process.cwd() which is correctly typed in Node.js environments.
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    },
    build: {
      outDir: 'dist',
    },
    server: {
      port: 3000
    }
  };
});
