const publicPath = './';
const { name } = require('./package');
module.exports = {
  publicPath,
  lintOnSave: false,
  productionSourceMap: false, // 设置生产环境的source map开启与关闭
  configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: name,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
      devtoolModuleFilenameTemplate: info => {
        const resPath = info.resourcePath;
        if ((/\.vue$/.test(resPath) && !/type=script/.test(info.identifier)) || /node_modules/.test(resPath)) {
          return `webpack:///${resPath}?${info.hash}`;
        }
        return `webpack:///${resPath.replace('./src', 'SouceCode')}`;
      },
    },
  },

  devServer: {
    open: true,
    port: 4200,
    https: false,
    hotOnly: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      // 配置跨域
      '/api': {
        target: 'http://localhost:44351', // 这里后台的地址模拟的;应该填写你们真实的后台接口
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          '^/api': '/api', // 重写,
        },
      },
    },
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
};
