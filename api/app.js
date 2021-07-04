// Set Application Server Express and Routing
const express = require('express')
const app = express()
const router = express.Router()
const consign = require('consign')

// Set View Engine [EJS]
app.set('view engine', 'ejs')
app.set('views', './api/views')

// Set Static path to Public content (css, jQuery, img, etc..)
app.use(express.static('public'))

// Set Routes with Consign
consign()
    .include('api/routes')
    .then('api/models')
    .into(app)

// Export application
module.exports = app