const express = require('express');

const router = express.Router();

router.route('/jobs').get((req,res)=>{
    return res.send({hellow:"hellow"})
})

module.exports = router
