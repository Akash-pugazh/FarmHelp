const { StatusCodes } = require('http-status-codes')

const notFound = (req, res, next) => {
  res.status(StatusCodes.NOT_FOUND).json({ message: 'Route does not exist' })
}

module.exports = notFound
