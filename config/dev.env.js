'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://192.168.0.103/qiye/public/admin"',
  // BASE_API: '"https://easy-mock.com/mock/5ac2f2b712c9765addbaadcc/manage"',
})
