require('dotenv').config()
const Product = require('../models/Product')
const asyncWrapper = require('../middleware/asyncWrapper')
const { StatusCodes } = require('http-status-codes')
const sendResponse = require('../utils/sendResponse')

const addProduct = asyncWrapper(async (req, res) => {
  req.body.sellerId = req.user.userId
  console.log(req.body)
  const data = await Product.create(req.body)
  return sendResponse(res, StatusCodes.CREATED, 'Product Added', data)
})

const getAllProducts = asyncWrapper(async (req, res) => {
  const data = await Product.find({ sellerId: req.user.userId })
  return sendResponse(res, StatusCodes.OK, 'Products Fetched', data)
})

const listAllProductsForUser = asyncWrapper(async (req, res) => {
  const data = await Product.find()
  return sendResponse(res, StatusCodes.OK, 'Products Fetched', data)
})

const updateProduct = asyncWrapper(async (req, res) => {
  const { id } = req.params
  const data = await Product.findOneAndUpdate(
    { _id: id },
    { $set: req.body },
    { new: true }
  )
  return sendResponse(res, StatusCodes.OK, 'Product Updated', data)
})

module.exports = {
  addProduct,
  getAllProducts,
  updateProduct,
  listAllProductsForUser,
}
