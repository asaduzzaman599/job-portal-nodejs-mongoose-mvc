const express = require('express');

const router = express.Router()

router.route('/signup').post((req,res)=>{
    res.send({signup:true})
})
router.route('/login').post((req,res)=>{
    res.send({login:true})
})

router.route('/me').get((req,res)=>{
    res.send({me:true})
})

module.exports = router

/* 
router.route('/').get(jobController.findAllJob).post(jobController.createJob)

router.route('/:id').get(jobController.findOneJob).patch(jobController.updateJob)

module.exports = router
*/