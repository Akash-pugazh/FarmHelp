const asyncWrapper = require('../middleware/asyncWrapper')
const { StatusCodes } = require('http-status-codes')
const User = require('../models/User')
const sendResponse = require('../utils/sendResponse')

const getUser = asyncWrapper(async (req, res) => {
  const { email } = req.body
  console.log(email)
  const user = await User.findOne({ email: email })
  console.log(user)
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

module.exports = {
  getUser,
  updateUser,
}
