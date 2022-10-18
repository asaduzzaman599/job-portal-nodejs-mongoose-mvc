const express = require('express');
const candidateController = require("../controllers/candidate.controller");
const router = express.Router()

router.route("/").post(candidateController.createCandidate)/* 
router.post("/file-upload", uploader.array("pdf"), candidateController.fileUpload); */


module.exports = router