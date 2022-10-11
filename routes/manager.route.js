const express = require('express');

const router = express.Router();

router.route('/').get((req,res)=>{
    return res.send({route:"Manager Route"})
})

router.route('/:id').get()

module.exports = router
