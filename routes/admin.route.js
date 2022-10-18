const express = require('express');
const { verifyToken } = require('../middleware/verifyToken');
const authorization = require('../utils/authorization');
const router = express.Router()

const candidateController = require("../controllers/candidate.controller");

router.route("/candidates").get(verifyToken,authorization('admin'),candidateController.findAllCandidatetService)
router.route("/candidates/:id").get(verifyToken,authorization('admin'),candidateController.findAllCandidatetService)


module.exports = router