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
  }
}
