const express = require('express');
const appliedStudent = require('../models/appliedStudent'); // Import your Student model or database schema here

const appliedStudentRoutes = (app) => {
    app.post('/api/appliedStudent', async (req, res) => {
        try {
            // Validate and process the request data
            const {
                studentName,
                fatherName,
                motherName,
                email,
                phone,
                fatherPhone,
                age,
                gender,
                address,
                studentClass,
                dateOfBirth,
                image,
                bloodGroup,



            } = req.body;

            const appliedStudentData = {
                studentName,
                fatherName,
                motherName,
                email,
                phone,
                fatherPhone,
                age,
                gender,
                address,
                studentClass,
                dateOfBirth,
                image,
                bloodGroup,
            };
            // Create a new student record in the database
            const newApplied = new appliedStudent(appliedStudentData);

            // Save the student to the database
            await newApplied.save();
            res.status(201).json({ message: 'Applied Successfully', student: newApplied });
        } catch (error) {
            // console.error(error);
            res.status(500).json({ error: 'An error occurred while creating the student' });
        }
    });
}
module.exports = appliedStudentRoutes;