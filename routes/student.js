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

            // Send a success response
            res.status(201).json({ message: 'Student created successfully', student: newStudent });
        } catch (error) {
            // Handle errors and send an error response
            console.error(error);
            res.status(500).json({ error: 'An error occurred while creating the student' });
        }
    });
};

module.exports = studentRoutes;
