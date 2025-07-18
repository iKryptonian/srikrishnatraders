import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  
  plugins: [react()],
  //base: '/Srikrishnatraders/',
  base: './',

  server: {
    host: true,  // Expose to local network if needed
    port: 3000,  // Set correct port
  },
});
