import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import builtins from 'rollup-plugin-node-builtins'


// We need to create a bundle of our rtc-streamer-consumer before importing it to typescript

export default {
  input: './lib',
  cache:false,
  output: {
    dir: './dist/',
    format: 'esm',
    name: 'bundle',
    inlineDynamicImports:true,
  },
  plugins: [
    resolve({
      main:true
    }),
    commonjs(),
    builtins()
  ],
  external: [
  ],
}

