const express = require('express')
const router = express.Router()

const { authenticateUser } = require('../controllers/auth')

router.post('/auth', authenticateUser)

module.exports = router
