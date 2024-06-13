import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import consoleNinja from 'console-ninja/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  consoleNinja()
  ],
})

