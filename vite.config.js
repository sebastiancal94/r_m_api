import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://sebastiancal94.github.io/Rick_and_Morty_API",
  plugins: [react()],
})
