const express = require('express')
const { updateUser, getUser, updateShop } = require('../controllers/user')
const router = express.Router()

router.post('/', getUser)
router.patch('/update/:id', updateUser)
router.patch('/update/:id/shop', updateShop)

module.exports = router
