const express = require('express')
const {
  addProduct,
  getAllProducts,
  updateProduct,
  listAllProductsForUser,
} = require('../controllers/product')
const router = express.Router()

router.route('/').post(addProduct).get(getAllProducts)
router.route('/:id').patch(updateProduct)
router.route('/user').get(listAllProductsForUser)

module.exports = router
