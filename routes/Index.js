const userRoute = require("./auth")
const studentRoutes = require("./student")
const teacherRoutes = require("./teacher")




const routes = (app) => {
    studentRoutes(app)
    teacherRoutes(app)
    userRoute(app)




}

module.exports = routes