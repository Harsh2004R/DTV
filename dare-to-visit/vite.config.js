import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // By default, Vite listens only on localhost (127.0.0.1).
    // Change this to '0.0.0.0' to allow external access.
    host: '0.0.0.0',
    port: 5000, // or your preferred port
  },
})
