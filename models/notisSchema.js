const mongoose = require("mongoose");
const NoticesSchema = new mongoose.Schema(
    {
        createNotices: {
            type: String,
            required: true,
        }
    }

)
module.exports = mongoose.model("Notices", NoticesSchema);