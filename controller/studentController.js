const Student = require('../model/Student')

const getStudents = async (req, res) => {
    const student = await Student.find().exec()
    res.status(200).json(student)
}

const createStudent = async (req, res) => {
    const { studentId, fullName, email, age } = req.body
    if (!studentId || !fullName || !email) {
        return res.status(400).json({"message": "Bad Request"})
    }
    const newStudent = await Student.create({
        studentId: studentId,
        fullName: fullName,
        email: email,
        age: age
    })
    const result = await newStudent.save()
    res.status(201).json(result)
}

const getStudent = async (req, res) => {
    const studentId = req.params.id
    if (!studentId) {
        return res.status(400).json({"messgae": "Bad request"})
    }
    const student = await Student.findOne({studentId: studentId}).exec()
    if (!student) {return res.status(204)}
    res.status(200).json(student)
}

module.exports = { getStudents, createStudent, getStudent }

