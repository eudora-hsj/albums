import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: './',
    server: {
        host: '0.0.0.0',
        port: 1225,
        proxy: {
            '/api': {
                target: 'https://api.imgur.com/',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
    preprocessorOptions: {
        scss: {
            additionalData: '@import "./src/assets/scss/var.scss";'
        }
    }
})
