require('dotenv').config()
const Shop = require('../models/Shop')
const asyncWrapper = require('../middleware/asyncWrapper')
const { StatusCodes } = require('http-status-codes')
const sendResponse = require('../utils/sendResponse')
const mongoose = require('mongoose')


const addShop = asyncWrapper(async (req, res) => {
  req.body.sellerId = new mongoose.Types.ObjectId(req.user.userId)
  const data = await Shop.create(req.body)
  return sendResponse(res, StatusCodes.CREATED, 'Shop Created', data)
})

const getAllShops = asyncWrapper(async (req, res) => {
  const data = await Shop.find()
  return sendResponse(res, StatusCodes.OK, 'Shops fetched', data)
})

module.exports = { addShop, getAllShops }
