const sendResponse = (res, statusCode, message, data = {}, token) => {
  return res.status(statusCode).json({
    message,
    data,
    token,
  })
}
module.exports = sendResponse
