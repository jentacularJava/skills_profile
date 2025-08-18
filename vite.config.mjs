import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const config = defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})

export { config as default }
