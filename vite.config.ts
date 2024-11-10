import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // generate .vite/manifest.json in outDir
    manifest: true
  },
  server: { 
    port: 3000,
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
