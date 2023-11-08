import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'

  return {
    plugins: [
      react(),
      svgr({
        include: '**/*.svg'
      })
    ],
    server: {
      port: 3000,
      open: true
    },
    build: {
      outDir: 'build'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    define: {
      __IS_DEV__: isDev
    },
    test: {
      globals: true,
      environment: 'jsdom',
      watch: false
    }
  }
})
