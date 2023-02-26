const mongoose = require('mongoose')

const {Schema} = mongoose

const studentSchema = new Schema({
    studentId: {
        type: String,
        required: true
    },
    age: Number,
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Student', studentSchema)
