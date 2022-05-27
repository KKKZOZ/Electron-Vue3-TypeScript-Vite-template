import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const transform = require('./script/transform.cjs')

// https://vitejs.dev/config/
export default defineConfig(()=>{
  
   const data = transform();
  
  return {
    base: './',
    plugins: [vue()],
    // build:{
    //   outDir:"distVite"
    // }
  }
})
