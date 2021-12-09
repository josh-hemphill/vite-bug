import { build as viteBuild } from 'vite'

const ssgOut = './dist';
const ssrEntry = './main.js'

await viteBuild({
    build: {
      polyfillModulePreload: false,
      ssr: ssrEntry,
      outDir: ssgOut,
      minify: false,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          exports: 'named',
          esModule: true,
          entryFileNames: '[name].js',
        },
      },
    },
    mode: 'production',
  })
