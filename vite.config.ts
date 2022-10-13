import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [viteReact()],
  server: {
    headers: {
      'Content-Security-Policy': "connect-src 'self' http://localhost ws://localhost:*; default-src 'none'; font-src https://fonts.gstatic.com; img-src 'self' https://via.placeholder.com; manifest-src 'self'; script-src-elem 'self' 'unsafe-inline'; style-src 'self' https://fonts.googleapis.com; style-src-elem 'self' 'unsafe-inline' https://fonts.googleapis.com"
    }
  }
})
