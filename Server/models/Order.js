require('dotenv').config()
const mongoose = require('mongoose')
const { nanoid } = require('nanoid')

const orderSchema = new mongoose.Schema(
  {
    orderId: { type: String },
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    buyerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { versionKey: false, timestamps: true }
)
orderSchema.pre('save', function (next) {
  this.orderId = nanoid(10)
  next()
})

module.exports = mongoose.model('Order', orderSchema)
