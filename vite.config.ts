import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  root: __dirname,
  plugins: [vue()],
  resolve: {
    alias: [{
      find: '@',
      replacement: path.resolve(__dirname, './src')
    }]
  }
})
