const express = require('express');
const candidateController = require("../controllers/candidate.controller");
const router = express.Router()

router.route("/")
.post(candidateController.createCandidate)

router.route("/resume/:resumeId")
.get(candidateController.getResume)

module.exports = router