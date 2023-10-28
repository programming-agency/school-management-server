const User = require('../models/User');

const userRoute = (app) => {
    app.post("/api/register", async (req, res) => {
        try {
            const { schoolName, name, email, password, phone } = req.body;
            const userData = { schoolName, name, email, password, phone };

            const newUser = new User(userData);
            await newUser.save();
            res.status(201).json({ message: "User successfUlly Create", user: newUser })

        } catch (error) {
            res.status(500).json({ error: "An error occurred white create the student" })

        }
    })

    app.post('/api/login', async (req, res) => {
        const { email, password } = req.body;
        console.log(email, password);
        try {
            const users = await User.findOne({ email });
            // console.log(users);
            if (!users) {
                return res.status(401).json({ msg: "Please Check Your Email and password ..!" })
            }
            const isPasswordValid = password === users.password;
            // console.log("Psss", password);
            console.log(isPasswordValid);
            if (isPasswordValid) {
                return res.status(401).json({ msg: "User Not authorization .LogIn Filed" })
            }
            return res.status(200).json({ msg: "Login Successfully", users })
        } catch (error) {
            return res.status(500).json({ msg: "Server Error" })

        }
    })

}



module.exports = userRoute;