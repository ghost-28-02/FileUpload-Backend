const File = require("../models/File");
const path = require("path");
const cloudinary = require('cloudinary').v2;

exports.localFileUpload = async (req, res) => {
    try {
        
        const file = req.files.file;
        console.log(file);
        
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        console.log(path);
        
        file.mv(path, (err) => {
            console.log(err);
        });

        res.status(200).json({
            success: true,
            message: "Local file uploaded successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

function isFileTypeSupported(type, supportedTypes) {
    return supportedTypes.includes(type);
}


async function uploadedFileToCloudinary(file, folder, quality = 100) {
    const options = {
        folder,
        resource_type: "auto",
        quality : quality
    }
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}


exports.imageUpload = async (req, res) => {
    try {
        const {name, tags, email} = req.body;
        const file = req.files.imageFile;

        const supportedTypes = ["jpg","jpeg","png"];
        const fileType = path.extname(file.name).substring(1).toLowerCase();

        if(!isFileTypeSupported(fileType, supportedTypes)){
            return res.status(400).json({
                success: false,
                message: "File formate not supported"
            })
        }

        const response = await uploadedFileToCloudinary(file, "fileUpload"); 

        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url
        });

        res.status(200).json({
            success: true,
            imageUrl: response.secure_url,
            message: "Image upload successfully"
        })


    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "issue in file upload",
            error: error
        });
    }
}

exports.videoUpload = async (req, res) => {
    try {
        const {name, tags, email} = req.body;
        const file = req.files.videoFile;

        const supportedTypes = ["mp4","mov"];
        const fileType = path.extname(file.name).substring(1).toLowerCase();

        if(!isFileTypeSupported(fileType, supportedTypes)){
            return res.status(400).json({
                success: false,
                message: "File formate not supported"
            })
        }

        const response = await uploadedFileToCloudinary(file, "fileUpload"); 

        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url
        });

        res.status(200).json({
            success: true,
            videoUrl: response.secure_url,
            message: "Video upload successfully"
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "issue in video upload",
            error: error
        });
    }
}

exports.imageReducerUpload = async (req, res) => {
    try {
        const {name, tags, email} = req.body;
        const file = req.files.imageFile;

        const supportedTypes = ["jpg","jpeg","png"];
        const fileType = path.extname(file.name).substring(1).toLowerCase();

        if(!isFileTypeSupported(fileType, supportedTypes)){
            return res.status(400).json({
                success: false,
                message: "File formate not supported"
            })
        }

        const response = await uploadedFileToCloudinary(file, "fileUpload", 90); 

        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url
        });

        res.status(200).json({
            success: true,
            imageUrl: response.secure_url,
            message: "Image upload successfully"
        })


    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "issue in reduce image upload",
            error: error
        });
    }
}