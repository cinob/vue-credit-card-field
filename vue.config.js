// vue.config.js
module.exports = {
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  pages: {
    index: {
      // entry for the page
      entry: './src/main.js',
      // the source template
      template: './public/index.html',
      // the output filename
      filename: 'index.html'
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  assetsDir: './src/assets',
  outputDir: './dist'
}
