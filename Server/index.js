require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const connectDb = require('./db/connect')
const notFound = require('./middleware/notFound')
const errorHandler = require('./middleware/errorHandler')
const cors = require('cors')
const helmet = require('helmet')
const rateLimiter = require('express-rate-limit')
const authRoutes = require('./routes/auth')
app.use(express.static('./public'))
app.set('trust proxy', 1)
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
)
app.use(cors())
app.use(helmet())
app.use(express.json())

// Main Routes Here
app.get('/api/v1', (req, res) => {
  res.send('Farm Help App')
})
app.use('/api/v1', authRoutes)

//  Handlers and Starter Code here
app.use(notFound)
app.use(errorHandler)
const mongoUri = process.env.MONGODB_URI
const port = process.env.PORT || 5000
async function startFn() {
  try {
    await connectDb(mongoUri)
      .then(() => {
        app.listen(port, () => {
          console.log(`Server started on port ${port}🥂`)
        })
      })
      .catch(err => {
        console.error(err)
        process.exit(1)
      })
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

startFn()
