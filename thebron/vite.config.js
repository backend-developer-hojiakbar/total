import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react"
import UnoCSS from 'unocss/vite'
import presetAttributify from '@unocss/preset-attributify'
// import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    UnoCSS({
      presets: [
        presetUno(),
        presetAttributify()
      ],
      transformers: [
        transformerAttributifyJsx({
          blocklist: [/text-[a-zA-Z]*/, 'text-5xl']
        })
      ],
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
})

