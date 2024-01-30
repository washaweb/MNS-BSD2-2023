// const path = require('path')
import path from 'path'

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
}