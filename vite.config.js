import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
// import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // VitePWA({ registerType: 'autoUpdate' })
  plugins: [vue(), Components()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
