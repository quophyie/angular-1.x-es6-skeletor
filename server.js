'use strict'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const path = require('path')

let webpackConfigFilename = './config/webpack.config.dev.js'

if (process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() === 'production') {
  webpackConfigFilename = './config/webpack.config.production.js'
}

console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
console.log(`USING WEBPACKONFIG FILE: ${path.resolve(__dirname, webpackConfigFilename)}`)

const config = require(webpackConfigFilename)

const webpackOptions = {
  publicPath: config.output.publicPath,
  // IF YOU ARE DOING ONLY JAVASCRIPT(MODULE) RELOADING AND NOT BOTH JAVASCRIPT(MODULE) AND HTML RELOADING,
  // THEN UNCOMMENT 'hot: true' BELOW. IF YOU ARE DOING BOTH JAVASCRIPT(MODULE) AND HTML RELOADING, THEN
  // YOU MUST LEAVE 'hot: true' UNCOMMENTED OTHERWISE HTML RELOADING WILL NOT WORK AND ONLY JAVASCRIPT MODULE
  // WILL WORK
  // hot: true,
  // The rest is terminal configurations
  quiet: false,
  noInfo: false,
  stats: {
    colors: true,
    progress: true
  },
  inline: true,
  historyApiFallback: true
}

const isHtmlHot = process.env.WEBPACK_HTML_HOT_RELOAD && process.env.WEBPACK_HTML_HOT_RELOAD.toLowerCase().trim() === 'true'

if (!isHtmlHot) {
  console.log('HTML hot reloader disabled!')
  webpackOptions.hot = true
} else {
  console.log('HTML hot reloader enabled!')
}

new WebpackDevServer(webpack(config), webpackOptions).listen(process.env.PORT, process.env.HOST, function (err, result) {
  if (err) {
    return console.log(err)
  }
  console.log(`Listening at http://${process.env.HOST}:${process.env.PORT}/`)
})
