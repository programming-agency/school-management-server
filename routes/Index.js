const userRoute = require("./auth")
const studentRoutes = require("./student")
const studentUserRoute = require("./studentLogin")
const teacherRoutes = require("./teacher")




const routes = (app) => {
    studentRoutes(app)
    teacherRoutes(app)
    userRoute(app)
    studentUserRoute(app)




}

module.exports = routes