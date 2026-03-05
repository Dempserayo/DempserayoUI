import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), dts({rollupTypes: true})],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'DempserayoUI',
      fileName: (format) => `dempserayo-ui.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM', 
          'react/jsx-runtime': 'react/jsx-runtime'
        },
      },
    },
  },
})


