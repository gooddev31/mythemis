const mongoose = require("mongoose");

const dbConnect = async() => {
    try {
        await mongoose.connect(process.env.DB_LINK)
    } catch (e) {
        console.log(e)
    }
}
module.exports = dbConnect;