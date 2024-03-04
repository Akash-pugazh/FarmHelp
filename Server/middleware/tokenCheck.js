require('dotenv').config()
const jwt = require('jsonwebtoken')
const sendResponse = require('../utils/sendResponse')
const { StatusCodes } = require('http-status-codes')

const tokenCheck = async (req, res, next) => {
  const token = req.headers.authorization
  if (!token)
    return await sendResponse(res, StatusCodes.UNAUTHORIZED, 'No Token Found')
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decodedToken
    next()
  } catch (err) {
    sendResponse(res, StatusCodes.UNAUTHORIZED, 'Something Unexpected happened')
  }
}

module.exports = tokenCheck
