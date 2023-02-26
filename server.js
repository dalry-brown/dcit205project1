const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
require('dotenv').config()
const connectDb = require('./config/dbConn')
const corsOptions = require('./config/corsOptions')

const app = express()
const PORT = process.env.PORT
app.use(cors(corsOptions))
mongoose.set('strictQuery', true)
connectDb()

//middleware for rendering json data
app.use(express.json())

//dynamic routes
app.use('/student', require('./routes/api/student'))

mongoose.connection.once('open', () => {
    console.log('Connected to mongodb')

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})

