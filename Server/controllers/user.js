const asyncWrapper = require('../middleware/asyncWrapper')
const { StatusCodes } = require('http-status-codes')
const User = require('../models/User')
const sendResponse = require('../utils/sendResponse')

const getUser = asyncWrapper(async (req, res) => {
  const { email } = req.body
  const user = await User.findOne({ email: email })
  return sendResponse(res, StatusCodes.OK, 'User Found', user)
})

const updateUser = asyncWrapper(async (req, res) => {
  const { id } = req.params
  const user = await User.findOneAndUpdate(
    { _id: id },
    { $set: req.body },
    { new: true }
  )
  return sendResponse(res, StatusCodes.OK, 'User Updated', user)
})

const updateShop = asyncWrapper(async (req, res) => {
  const { id } = req.params
  const data = await User.findOneAndUpdate(
    { _id: id },
    { $set: { sellerDetails: req.body } },
    { new: true }
  )
  return sendResponse(res, StatusCodes.OK, 'User Shop Updated', data)
})

module.exports = {
  getUser,
  updateUser,
  updateShop,
}
