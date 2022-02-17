const path = require('path')
function resolve (dir){
    return path.join(__dirname,dir)
} 
module.exports = {
  configureWebpack: {
      resolve: {
          alias: {
              "views": "@/views",
              "network": "@/network",
              "components": "@/components",
              "common": "@/common",
              "assets": "@/assets"
          }
      }
  },
  chainWebpack(config) {
    // svg配置
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
