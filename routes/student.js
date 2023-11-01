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
                image,
                bloodGroup,
                section

            } = req.body;

            const studentData = {
                studentName,
                fatherName,
                motherName,
                gender,
                email,
                image,
                address,
                studentClass,
                classRoll,
                dateOfBirth,
                phone,
                bloodGroup,
                section
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

    app.get('/api/students/:id', async (req, res) => {
        try {
            const id = req.params.id;
            // console.log(id);
            // Find the student with the specified ID
            const findStudent = await Student.findById(id);

            if (findStudent) {
                res.status(200).json({ message: "Found student successfully", student: findStudent });
            } else {
                res.status(404).json({ message: 'Student not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    });
};

module.exports = studentRoutes;
