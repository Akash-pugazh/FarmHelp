const sendResponse = (res, statusCode, message, data = {}) => {
  return res.status(statusCode).json({
    message,
    data,
  })
}
module.exports = sendResponse