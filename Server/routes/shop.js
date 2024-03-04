const express = require('express')
const { addShop, getAllShops } = require('../controllers/shop')
const router = express.Router()

router.route('/').post(addShop).get(getAllShops)

module.exports = router
