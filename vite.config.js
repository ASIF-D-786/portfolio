import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // change to '/' if deploying to a root domain, or '/<repo-name>/' for GitHub Pages project sites
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
