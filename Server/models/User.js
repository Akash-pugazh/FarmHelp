const mongoose = require('mongoose')

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

module.exports = mongoose.model('User', userSchema)
