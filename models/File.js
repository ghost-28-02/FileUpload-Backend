const mongoose = require('mongoose');
const { transporter }= require("../config/nodemailer");


const fileSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    },
    tags: {
        type: String
    },
    email: {
        type: String
    }
})

fileSchema.post("save", async function (doc) {
    try {

        let info = await transporter.sendMail({
            from: process.env.MAIL_USER,
            to: doc.email,
            subject: "New File uploaded on Cloudinary",
            html: `
                <div style="font-family: Arial, sans-serif">
                    <h2>Hello Ji 👋</h2>
                    <p>Your file has been uploaded successfully to Cloudinary.</p>
                    <a 
                    href="${doc.imageUrl}" 
                    target="_blank"
                    style="
                        display:inline-block;
                        padding:10px 15px;
                        background:#4f46e5;
                        color:#fff;
                        text-decoration:none;
                        border-radius:5px;
                    "
                    >
                    View Uploaded File
                    </a>
                </div>`
        });

        console.log("Email sent:", info);

    } catch (error) {
        console.log(error);
    }
})

const File = mongoose.model("File", fileSchema);
module.exports = File;
