const express = require('express')
const app = express()
const authRoutes = reqire('./routes/auth')

app.use('/api/auth', authRoutes)

module.exports = app