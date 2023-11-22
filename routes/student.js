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
                section,
                status

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
                section,
                status
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
    // Get all student
    app.get('/api/students', async (req, res) => {
        try {
            const students = await Student.find()
            res.status(200).json(students)
            // console.log(students);
        } catch (error) {
            res.status(501).json({ message: 'Student not Found!' })
        }

    })
    // get student by id
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

    // Delete Student

    app.delete('/api/students/:id', async (req, res) => {
        const id = req.params.id;
        // console.log(id);

        try {
            // Use Mongoose to find and delete the student by ID
            const deletedStudent = await Student.findByIdAndDelete(id);

            if (deletedStudent) {
                res.status(200).json({ message: 'Student deleted successfully' });
            } else {
                res.status(404).json({ message: 'Student not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'An error occurred while deleting the student', error: error.message });
        }
    });

    app.put('/api/students/:id', async (req, res) => {
        const id = req.params.id;
        // console.log(id);
        const updateStudentData = req.body;

        try {
            // Use the Mongoose 'findOneAndUpdate' method to update the student
            const updatedStudent = await Student.findOneAndUpdate({ _id: id }, updateStudentData, { new: true });

            if (updatedStudent) {
                return res.status(200).json({ message: 'Student updated successfully', student: updatedStudent });
            } else {
                return res.status(404).json({ error: 'Student not found' });
            }
        } catch (error) {
            // Handle any potential errors and send an error response
            console.error(error);
            return res.status(500).json({ error: 'An error occurred while updating the student' });
        }
    });
};

module.exports = studentRoutes;
