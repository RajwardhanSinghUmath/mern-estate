import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server :{
    //whenever we are having /api in request go to the host of localhost not the default client side
    proxy:{
      '/api':{
        target:'http://localhost:3000',
        secure:false
      }
    }
  },
  plugins: [react()],
})
