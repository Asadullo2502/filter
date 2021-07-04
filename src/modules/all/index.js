const router = require('express').Router()
const { fetchAll } = require('./controller')

router.route('/all')
.post(fetchAll)

module.exports = router