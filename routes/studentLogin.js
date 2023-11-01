const NewStudent = require('../models/StudentUser')

const studentUserRoute = (app) => {
    app.post("/api/studentRegister", async (req, res) => {
        try {
            const { studentName, email, password, phone, dateOfBirth } = req.body;
            const userData = { studentName, email, password, phone, dateOfBirth };

            const newStudent = new NewStudent(userData);
            await newStudent.save();
            res.status(201).json({ message: "User successfUlly Create", studentUsers: newStudent })

        } catch (error) {
            res.status(500).json({ error: "An error occurred white create the NewStudent" })

        }
    })

    app.post('/api/studentLogin', async (req, res) => {
        const { email, password } = req.body;
        // console.log(email, password);
        try {
            const studentUsers = await NewStudent.findOne({ email });
            // console.log(studentUsers);

            if (!studentUsers) {
                return res.status(401).json({ msg: "Please Check Your Email and password ..!" })
            }
            const isPasswordValid = password === studentUsers.password;
          
            // console.log(isPasswordValid);

            if (!isPasswordValid) {
                return res.status(401).json({ msg: "User Not authorization. LogIn Filed" })
            }
            return res.status(200).json({ msg: "Login Successfully", studentUsers })
        } catch (error) {
            return res.status(500).json({ msg: "Server Error" })

        }
    })

}



module.exports = studentUserRoute;