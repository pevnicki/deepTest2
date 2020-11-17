const express = require('express')
const settings = require('../routes/settings')


module.exports = function(app) {
  app.use(express.json())
  app.use('settings',settings)
}
