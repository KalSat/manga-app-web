//@ts-nocheck
import { defineConfig, loadEnv } from 'vite'
import isCI from 'is-ci'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'
import tsConfig from './tsconfig.json'
import viteCompression from 'vite-plugin-compression'
import { imagetools } from 'vite-imagetools'
import { visualizer } from 'rollup-plugin-visualizer'

const getPathAlias = () => {
  const paths = tsConfig.compilerOptions.paths
  return Object.keys(paths).reduce((map, key) => {
    const transformedKey = key.replace('/*', '')

    const transformedValue = paths[key][0].replace('./', '').replace('/*', '')
    map[transformedKey] = resolve(__dirname, transformedValue)
    return map
  }, {})
}

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const envs = loadEnv(mode, 'envs')
  const isBuild = command === 'build'
  const isDebug = mode === 'debug'
  const baseUrl = '/'

  const config = {
    base: baseUrl,
    envDir: 'envs',
    define: {},
    resolve: { alias: getPathAlias() },
    esbuild: {
      drop: isBuild ? ['console', 'debugger'] : [],
    },
    css: {
      modules: {
        localsConvention: 'camelCaseOnly',
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
        },
        output: {
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: '[ext]/[name]-[hash].[ext]',
          manualChunks: {
            react: ['react', 'react-dom'],
            hooks: ['react-query', 'react-use'],
            router: ['react-router-dom'],
            i18n: ['i18next', 'react-i18next'],
            network: ['axios'],
            mui: ['@mui/material', '@mui/icons-material'],
          },
        },
        plugins: [],
      },
    },
    plugins: [
      react(),
      tsconfigPaths(),
      imagetools({
        include: '**/*.{heic,heif,avif,jpeg,jpg,png,tiff,webp,gif}*',
        defaultDirectives: () => {
          return new URLSearchParams({ format: 'webp' })
        },
        extendOutputFormats: (defaults) => {
          return {
            ...defaults,
            inline: () => async (metas) => {
              const out: string[] = []
              for (const { image, format } of metas) {
                const buffer = await (image as any).toBuffer()
                out.push(`data:image/${format};base64,${buffer.toString('base64')}`)
              }
              return out.length === 1 ? out[0] : out
            },
          }
        },
      }),
      svgr({
        include: 'src/assets/**/*.svg',
      }),
      visualizer({
        template: 'treemap',
        open: !isCI,
        gzipSize: true,
        brotliSize: true,
      }) as PluginOption,
    ],
  }

  if (command === 'serve') {
    config.define.global = {}
  }

  if (isBuild && envs.VITE_COMPRESS_MODE === 'gzip') {
    config.build.rollupOptions.plugins = [
      ...config.build.rollupOptions.plugins,
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
        deleteOriginFile: true,
      }),
    ]
  }

  return config
})
