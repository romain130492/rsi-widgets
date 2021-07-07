import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import builtins from 'rollup-plugin-node-builtins'
import scss from 'rollup-plugin-scss'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

// We need to create a bundle of our rtc-streamer-consumer before importing it to typescript

export default {
  input: './streamers/index.js',
  cache: false,
  output: {
    dir: './dist/',
    format: 'esm',
    name: 'bundle',
    inlineDynamicImports: true,
  },
  plugins: [
    scss({
      output: './dist/index.css',
      failOnError: true,
      outputStyle: 'compressed',
      sass: require('node-sass'),
      processor: () => postcss([autoprefixer()]),
      watch: './src'
    }),
    resolve({
      main: true
    }),
    commonjs(),
    builtins()
  ],
  external: [
  ],
}
