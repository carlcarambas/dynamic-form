import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@interfaces': './src/interfaces',
      '@components': './src/components',
      '@containers': './src/containers',
      '@utils': 'src/utils',
      '@services': './src/services',
      '@styles': './src/styles',
      '@public': './public',
      '@components/icons': './src/components/icons',
      '@redux': './src/redux',
      '@test': './test',
    },
  },
})
