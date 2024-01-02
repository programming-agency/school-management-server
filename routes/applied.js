const express = require("express");
const appliedStudent = require("../models/appliedStudent"); // Import your Student model or database schema here

const appliedStudentRoutes = (app) => {
  app.post("/api/appliedStudent", async (req, res) => {
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
      res
        .status(201)
        .json({ message: "Applied Successfully", student: newApplied });
    } catch (error) {
      // console.error(error);
      res
        .status(500)
        .json({ error: "An error occurred while creating the student" });
    }
  });

  app.get("/api/appliedStudent", async (req, res) => {
    try {
      const applied = await appliedStudent.find();
      res.status(200).json(applied);
    } catch (error) {
      res.status(501).json({ message: "Applied Student applied not found" });
    }
  });

  app.get("/api/appliedStudent/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
      const findAppliedStudent = await appliedStudent.findById(id);

      if (findAppliedStudent) {
        res
          .status(200)
          .json({
            message: "Found student successfully",
            student: findAppliedStudent,
          });
      } else {
        res.status(404).json({ message: "Student not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  app.put("/api/appliedStudent/:id", async (req, res) => {
    const id = req.params.id;
    const updateAppliedStudentData = req.body;
    try {
      const updateData = await appliedStudent.findByIdAndUpdate(
        { _id: id },
        updateAppliedStudentData,
        { new: true }
      );

      if (updateData) {
        return res
          .status(200)
          .json({ message: "New student Data Update", student: updateData });
      } else {
        return res.status(404).json({ error: "student Not Found" });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ error: "An error occurred while updating the student" });
    }
  });
};
module.exports = appliedStudentRoutes;
