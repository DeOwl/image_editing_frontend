import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from'vite-plugin-mkcert'
import fs from 'fs';
import path from 'path';
import {VitePWA} from "vite-plugin-pwa"

// https://vite.dev/config/
export default defineConfig({
  clearScreen: false,
  base:"/image_editing_frontend",
  plugins: [react(), mkcert(), VitePWA({
    registerType: 'autoUpdate',
    manifest:{
      name: "Pictura",
      short_name: "Pictura",
      start_url: "/image_editing_frontend",
      display: "standalone",
      background_color: "#fdfdfd",
      theme_color: "#db4938",
      orientation: "portrait-primary",
      icons: [
        {
          src: "camera_icon.ico",
          type: "image/svg+xml", "sizes": "256x256"
        }
      ],

    }})],
  preview:{
    https:{
      key: fs.readFileSync(path.resolve(__dirname, 'cert.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'cert.crt')),
    },
    port:443,
  },
  server: { 
    host: true,
    port:3000,
    proxy: {
      "/api": {
        target: "http://192.168.64.254:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/"),
      },
      "/filter-images": {
        target: "http://192.168.64.254:9000",
        changeOrigin: true,
      },
    },
  },
  envPrefix: ['VITE_', 'TAURI_ENV_*'],
  build: {
    // Tauri uses Chromium on Windows and WebKit on macOS and Linux
    target:
      process.env.TAURI_ENV_PLATFORM == 'windows'
        ? 'chrome105'
        : 'safari13',
    // don't minify for debug builds
    minify: !process.env.TAURI_ENV_DEBUG ? 'esbuild' : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_ENV_DEBUG,
  },
})
