require('dotenv').config()
const mongoose = require('mongoose')
const { nanoid } = require('nanoid')

const productSchema = new mongoose.Schema(
  {
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    serialNo: { type: String, unique: true },
    productId: { type: String, index: true, unique: true },
    name: { type: String, required: true, index: true, unique: true },
    type: {
      type: String,
      required: true,
      enum: ['fruit', 'vegetable', 'cereal', 'others'],
      default: 'others',
    },
    price: { type: Number, required: true },
    totalStock: { type: Number, required: true },
    inStock: { type: Number },
  },
  { versionKey: false, timestamps: true }
)
productSchema.pre('save', function (next) {
  if (!this.productId) this.productId = nanoid(5)
  if (!this.serialNo) this.serialNo = nanoid(5)
  this.inStock = this.totalStock
  next()
})

module.exports = mongoose.model('Product', productSchema)
