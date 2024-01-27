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
    email_verified: Boolean,
    picture: String,
    isSeller: Boolean,
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
