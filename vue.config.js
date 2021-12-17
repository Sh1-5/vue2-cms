const path = require('path')

module.exports = {
  publicPath: './',
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src')).set('views', '@/views')
  }
}
