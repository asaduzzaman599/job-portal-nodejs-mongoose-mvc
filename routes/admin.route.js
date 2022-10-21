const express = require('express');
const { verifyToken } = require('../middleware/verifyToken');
const authorization = require('../utils/authorization');
const router = express.Router()

const candidateController = require("../controllers/candidate.controller");
const managerController = require("../controllers/manager.controller");
const adminController = require("../controllers/admin.controller");

router.route("/candidates")
.get(verifyToken,authorization('admin'),candidateController.findAllCandidatetService)

router.route("/candidates/:id")
.get(verifyToken,authorization('admin'),candidateController.findAllCandidatetService)

router.route("/managers")
.get(verifyToken,authorization('admin'),managerController.findAllManager)

router.route("/make-managers/:id")
.patch(verifyToken,authorization('admin'),adminController.makeAdmin)

module.exports = router