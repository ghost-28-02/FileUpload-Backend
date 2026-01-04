const express = require("express");
const router = express.Router();

const {
    imageUpload,
    videoUpload,
    imageReducerUpload,
    localFileUpload
} = require("../controllers/fileUpload");

router.post("/videoUpload", videoUpload);
router.post("/imageReducerUpload", imageReducerUpload);
router.post("/localFileUpload", localFileUpload);
router.post("/imageUpload", imageUpload);

module.exports = router;