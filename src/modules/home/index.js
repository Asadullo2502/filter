const router = require('express').Router()
const {homeHtml} = require('./controller')

router.route('/')
.get(homeHtml)

module.exports = router