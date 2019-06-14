// Karma configuration
// Generated on Sat Nov 19 2016 14:40:11 GMT+0000 (GMT)
const webpack = require('webpack')
const webpackConfig = require('./config/webpack.config.dev')
// webpackConfig.entry = {}

// As Hot Module Replacement (HMR) does not work with Karma when using webpack, we remove the
// HMR plugin (i.e. HotModuleReplacementPlugin) from the list of webpack plugins
// otherwise you will get errors like
// TypeError: undefined is not an object (evaluating 'this["webpackHotUpdate"]') when Phantomjs is set as the browser
// Uncaught TypeError: Cannot read property 'webpackHotUpdate' of undefined when Chrome is set as the browser
if (webpackConfig.plugins) {
  webpackConfig.plugins = webpackConfig.plugins.filter(plugin => !(plugin instanceof webpack.HotModuleReplacementPlugin))
}

module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      './node_modules/babel-polyfill/dist/polyfill.js',
      './node_modules/angular/angular.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './app/tests-index.js'
    ],

    // list of files to exclude
    exclude: [],

    webpack: webpackConfig,
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './app/tests-index.js': ['webpack', 'babel', 'coverage', 'sourcemap']
    },

    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline' // inline source maps inside compiled files
      }
    },
    coverageReporter: {
      type: 'text'
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // reporters: ['progress'],
    reporters: ['spec', 'coverage'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    // usePolling: true,

    //  autoWatchBatchDelay: 500,

    plugins: [
      'karma-jasmine',
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-babel-preprocessor',
      'karma-junit-reporter',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'istanbul-instrumenter-loader',
      'karma-coverage'
    ],

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      // 'Chrome',
      'PhantomJS'
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    // singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
