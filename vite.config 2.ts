import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// Custom plugin to handle HTML files as raw text
function htmlRawPlugin() {
  return {
    name: 'html-raw',
    transform(code: string, id: string) {
      if (id.endsWith('.html')) {
        return {
          code: `export default ${JSON.stringify(code)}`,
          map: null
        }
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    htmlRawPlugin()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  assetsInclude: ['**/*.html'],
  build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router']
        }
      }
    }
  },
  server: {
    port: 5173,
    open: true,
    host: true
  },
  preview: {
    port: 4173,
    open: true
  }
}) 