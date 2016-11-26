'use strict'
var testsContext = require.context('.', true, /\.js$/)
testsContext.keys().forEach(function (path) {
  try {
    testsContext(path)
  } catch (err) {
    console.error('[ERROR] WITH SPEC FILE: ', path)
    console.error(err)
  }
})
