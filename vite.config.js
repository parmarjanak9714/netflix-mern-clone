import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // 🔄 [FIXED AUTO-REFRESH]: આ લાઇન બ્રાઉઝરને મજબૂર કરશે કે તે ફાઈલ સેવ થતાં જ લાઈવ અપડેટ કરે!
    watch: {
      usePolling: true,
    },
  },
})
