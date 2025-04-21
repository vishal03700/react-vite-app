import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      crypto: 'crypto-browserify', // Add this line to alias 'crypto' to 'crypto-browserify'
    },
  },
  define: {
    'process.env': {}, // Ensure process.env is defined for compatibility
  },
})
