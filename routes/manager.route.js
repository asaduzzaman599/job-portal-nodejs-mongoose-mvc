const express = require('express');
const managerController = require("../controllers/manager.controller");

const router = express.Router();

router.route('/').get(managerController.findAllManager).post(managerController.createManager)



router.route('/jobs').get((req,res)=>{
    return res.send({route:"Manager Route"})
}).post(managerController.createManager)


router.route('/:id').get(managerController.findoneManager)

module.exports = router
