const router = require('express').Router()
const Controller = require('./controllers')

router.post('/distancia', Controller.distancia)

module.exports = router
