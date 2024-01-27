const { StatusCodes } = require('http-status-codes')

const errorHandler = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || 'Something went wrong, please try again later',
  }
  if (err.name === 'JsonWebTokenError') {
    customError.message = 'Not authorized, Invalid Token'
    customError.statusCode = StatusCodes.UNAUTHORIZED
  }
  if (err.name === 'TokenExpiredError') {
    customError.message = 'Not authorized, Token Expired'
    customError.statusCode = StatusCodes.UNAUTHORIZED
  }
  if (err.name === 'UnAuthenticatedError') {
    customError.message = 'Not authorized, Token Failed'
    customError.statusCode = StatusCodes.UNAUTHORIZED
  }
  if (err.code && err.code === 11000) {
    customError.message = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field, Someone already exists with this ${Object.keys(
      err.keyValue
    )}. Please choose another value`
    customError.statusCode = StatusCodes.BAD_REQUEST
  }
  if (err.name === 'ValidationError') {
    customError.message = Object.values(err.errors)
      .map(item => item.message)
      .join(', ')
    customError.statusCode = StatusCodes.BAD_REQUEST
  }
  if (err.name === 'CastError') {
    customError.message = `No item found with id : ${err.value}`
    customError.statusCode = StatusCodes.NOT_FOUND
  }
  return res
    .status(customError.statusCode)
    .json({ message: customError.message })
}

module.exports = errorHandler
