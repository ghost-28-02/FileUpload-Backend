const mongoose = require('mongoose');
require("dotenv").config();

exports.DBconnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("DB Connect Successfully"))
    .catch( (e) => {
        console.log("Issue in DB Connection");
        console.log(e.message);
        process.exit(1)
    });
}