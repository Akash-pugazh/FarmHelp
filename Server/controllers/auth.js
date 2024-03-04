const asyncWrapper = require('../middleware/asyncWrapper')
const { OAuth2Client } = require('google-auth-library')
const { StatusCodes } = require('http-status-codes')
const sendResponse = require('../utils/sendResponse.js')
const User = require('../models/User')
const authClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

const authenticateUser = asyncWrapper(async (req, res) => {
  const { idToken } = req.body
  if (!idToken)
    return sendResponse(res, StatusCodes.BAD_REQUEST, 'No Token Found')
  try {
    const response = await authClient.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    })
    const { email_verified, email, name, picture } = await response.payload
    if (!email_verified)
      return sendResponse(res, StatusCodes.BAD_REQUEST, 'Email Not Verified')
    const fetchUserFromDatabase = await User.findOne({ email })
    if (fetchUserFromDatabase) {
      const token = await fetchUserFromDatabase.createJWT()
      return sendResponse(
        res,
        StatusCodes.OK,
        'User Found',
        fetchUserFromDatabase,
        token
      )
    }
    const password = email + process.env.GOOGLE_CLIENT_ID
    try {
      const newUser = await User.create({
        email,
        name,
        password,
        picture,
        email_verified,
      })
      const token = await newUser.createJWT()
      console.log(newUser, token)
      return sendResponse(
        res,
        StatusCodes.CREATED,
        'User Created',
        newUser,
        token
      )
    } catch (err) {
      return sendResponse(res, StatusCodes.BAD_REQUEST, 'MongoDb Error', err)
    }
  } catch (err) {
    return sendResponse(res, StatusCodes.BAD_REQUEST, 'Google Auth Error', err)
  }
})

module.exports = {
  authenticateUser,
}
