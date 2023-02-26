const express = require('express')
const router = express.Router()
const { getStudents, createStudent, getStudent } = require('../../controller/studentController')

router.route('/')
.get(getStudents)
.post(createStudent)

router.route('/:id')
.get(getStudent)

module.exports = router