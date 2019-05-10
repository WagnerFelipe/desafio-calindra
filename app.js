require('./_config/globals')
// require('./_config/db')

const express = require('express')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const trimBody = require('connect-trim-body')
const allowCors = require('./_config/cors')
const errorHandler = require('./_config/error/handler/errorHandler')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ extended: false, limit: '10mb' }))
app.use(trimBody())
app.use(cookieParser())
app.use(allowCors)
app.use('/public', express.static('_public'))

// Cria as rotas dinamicamente a partir da pasta modules
let api = {}
let modules = require('./_config/getModules')('./modules/')
const createRoutes = (element) => {
  api[element] = require('./modules/' + element + '/routes')
  app.use('/api/' + element, api[element])
}
modules.forEach(createRoutes)

// error handler
app.use(errorHandler)

module.exports = app
