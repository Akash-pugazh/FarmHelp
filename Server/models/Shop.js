require('dotenv').config()
const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema(
  {
    sellerId: { type: mongoose.Schema.Types.ObjectId, required: true },
    shopName: { type: String, required: true },
    location: { type: String, required: true },
    isDeliveryAvailable: { type: Boolean, required: true },
    contactNumber: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
)
shopSchema.pre('save', function (next) {
  next()
})

module.exports = mongoose.model('Shop', shopSchema)
