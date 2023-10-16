// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
  // transpileDependencies: true
  publicPath: process.env.NODE_ENV === "production" ? "/tvds-lab/" : "/",
  // publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  lintOnSave: process.env.NODE_ENV === 'development',
  devServer:{
    open: true,
  }
}