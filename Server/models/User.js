require('dotenv').config()
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema(
  {
    email: {
      required: true,
      unique: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    password: {
      required: false,
      type: String,
    },
    email_verified: { type: Boolean },
    picture: { type: String },
    isConfiguredDetails: { type: Boolean, default: false },
    isSeller: { type: Boolean },
    sellerDetails: { type: Object },
  },
  {
    timestamps: true,
  }
)

userSchema.methods.createJWT = async function () {
  const payLoad = {
    iss: 'https://farmhelp.com',
    aud: 'https://api.farmhelp.com',
    sub: `farmhelp|${this._id}`,
    email: this.email,
    userId: this._id,
  }
  return jwt.sign(payLoad, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  })
}

module.exports = mongoose.model('User', userSchema)
