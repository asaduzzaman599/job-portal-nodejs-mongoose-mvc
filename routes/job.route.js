const express = require('express');
const jobController = require("../controllers/job.controller");
const uploader = require('../middleware/uploader');
const { verifyToken } = require('../middleware/verifyToken');
const router = express.Router()

router.route('/').get(jobController.findAllJob).post(verifyToken,jobController.createJob)
router.post('/:id/apply',uploader.single("pdf"), jobController.applyJob)
router.route('/:id').get(jobController.findOneJob).patch(jobController.updateJob)

module.exports = router