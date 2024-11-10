import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/image_editing_frontend",
  server: { 
    host:"192.168.0.101",
    port:4173,
    strictPort:true,
    proxy: {
      "/api": {
        target: "http://192.168.0.104:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/"),
      },
      "/filter-images": {
        target: "http://192.168.0.104:9000",
        changeOrigin: true,
      },
    },
  },
  
})
