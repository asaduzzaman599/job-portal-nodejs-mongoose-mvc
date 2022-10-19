const express = require('express');
const jobController = require("../controllers/job.controller");
const uploader = require('../middleware/uploader');
const { verifyToken } = require('../middleware/verifyToken');
const authorization = require('../utils/authorization');
const router = express.Router()

router.route('/').get(jobController.findAllJob).post(verifyToken,jobController.createJob)
router.get('/highest-paid-jobs',jobController.highestPaidJobs)
router.get('/highest-applied-jobs',jobController.highestAppliedJobs)
router.post('/:id/apply',verifyToken,authorization('candidate'),uploader.single("pdf"), jobController.applyJob)
router.route('/:id').get(jobController.findOneJob).patch(jobController.updateJob)

module.exports = router