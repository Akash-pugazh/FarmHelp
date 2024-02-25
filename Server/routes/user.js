const express = require('express')
const { updateUser, getUser } = require('../controllers/user')
const router = express.Router()

router.post('/', getUser)
router.patch('/update/:id', updateUser)

module.exports = router
