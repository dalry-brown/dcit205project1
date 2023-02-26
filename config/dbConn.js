const mongoose = require('mongoose')

const connectDb = async () => {
    await mongoose.connect(process.env.DATABASE_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
}

module.exports = connectDb

