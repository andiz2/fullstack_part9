import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist' // This will output the build files in the 'dist' directory
  },
  plugins: [react()],
})
