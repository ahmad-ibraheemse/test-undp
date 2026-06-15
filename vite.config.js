import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base value if the "/repoName/"
  base: '/test-undp/',
  plugins: [react()],
  build: {
    cssTarget: 'safari13',
  },
})
