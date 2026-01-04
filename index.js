const express = require('express');
const app = express();

require("dotenv").config();

const fileupload = require("express-fileupload");

app.use(express.json());
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

const PORT = process.env.PORT || 5000;

require("./config/database").DBconnect();

require("./config/cloudinary").cloudinaryConnect();

const Upload = require("./routes/FileUpload");
app.use('/api/v1/upload', Upload);


app.listen( PORT, ()=>{
    console.log(`Server is Running at PORT No. ${PORT}`);
});

