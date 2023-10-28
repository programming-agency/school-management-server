const express = require('express');
const Student = require('../models/StudentSchema'); // Import your Student model or database schema here

const studentRoutes = (app) => {
    app.post('/api/students', async (req, res) => {
        try {
            // Validate and process the request data
            const {
                studentName,
                fatherName,
                motherName,
                email,
                phone,
                gender,
                address,
                studentClass,
                classRoll,
                dateOfBirth,
            } = req.body;

            const studentData = {
                studentName,
                fatherName,
                motherName,
                gender,
                email,
                address,
                studentClass,
                classRoll,
                dateOfBirth,
                phone,
            };
            // Create a new student record in the database
            const newStudent = new Student(studentData);

            // Save the student to the database
            await newStudent.save();
            res.status(201).json({ message: 'Student created successfully', student: newStudent });
        } catch (error) {
            // console.error(error);
            res.status(500).json({ error: 'An error occurred while creating the student' });
        }
    });

    app.get('/api/students', async (req, res) => {
        try {
            const students = await Student.find()
            res.status(200).json(students)
            // console.log(students);
        } catch (error) {
            res.status(501).json({ message: 'Student not Found!' })
        }

    })
};

module.exports = studentRoutes;
