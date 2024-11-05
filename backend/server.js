const express = require('express')
const mongoose = require('mongoose')
const courseRoutes = require('./routes/courses')
const quizRoutes = require('./routes/quizRoutes')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

const app = express()

mongoose.connect('mongodb://localhost:27017/ecolearn')
  .then(() => console.log('Connected...'))
  .catch((error) => console.log('Failed to connect'))

app.use('/images', express.static(path.join(__dirname, '/images/')))

app.use(cors())

app.use('/api', courseRoutes)

app.use('/api', quizRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})