import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        lang: 'ja',
        name: 'SYQ',
        short_name: 'SYQ',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            "src": "ogpimage.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "ogpimage.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ]
      }
    })
  ],
  server: {
    port: 3000,
  }
})
