const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  configureWebpack: {
    externals: {
        'AMap':'AMap' //高德地图配置
    }
}
});
