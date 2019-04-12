const path = require('path')
const merge = require('webpack-merge')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = merge(require('./webpack.base'), {
  context: __dirname,

  entry: './src/index.js',

  plugins: [
    new VueLoaderPlugin()
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: {
      root: 'WeekPicker',
      amd: 'week-picker',
      commonjs: 'week-picker'
    },
    libraryTarget: 'umd'
  },

  externals: {
    vue: 'vue'
  }
})
