const express = require('express');
const candidateController = require("../controllers/candidate.controller");
const router = express.Router()
const uploader = require("../middleware/uploader");

router.post("/file-upload", uploader.array("pdf"), candidateController.fileUpload);


module.exports = router