/// <reference types="vitest" />
import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 7000,
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
    __IS_DEV__: true
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
