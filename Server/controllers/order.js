require('dotenv').config()
const Order = require('../models/Order')
const asyncWrapper = require('../middleware/asyncWrapper')
const { StatusCodes } = require('http-status-codes')
const sendResponse = require('../utils/sendResponse')

const addOrder = asyncWrapper(async (req, res) => {
  req.body.buyerId = req.user.userId
  const data = await Order.create(req.body)
  return sendResponse(res, StatusCodes.CREATED, 'Order Created', data)
})

const getAllOrders = asyncWrapper(async (req, res) => {
  const data = await Order.find({ buyerId: req.user.userId })
  return sendResponse(res, StatusCodes.OK, 'Orders fetched', data)
})

module.exports = { addOrder, getAllOrders }
