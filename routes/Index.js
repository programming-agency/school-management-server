const studentRoutes = require("./student")
const teacherRoutes = require("./teacher")




const routes = (app) => {
    studentRoutes(app)
    teacherRoutes(app)




}

module.exports = routes