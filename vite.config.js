import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import { resolve } from 'path'
import { svgBuilder } from './src/plugins/svgBuilder';
// vite.config.js
export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  plugins: [
    svgBuilder('./src/icons/svg/'),
    createVuePlugin({
      jsx: true, vueTemplateOptions: { compilerOptions: { whitespace: 'condense' }},
      jsxOptions: { compositionAPI: true }
    })
  ],
  resolve: {
    extensions: ['.vue', '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      // vue2项目别名一般都是@，vue3中一般使用/@/, 为方便使用
      '@': resolve('src')
    }
  }
})
