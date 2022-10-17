const { query } = require("express");
const Candidate = require("../models/Candidate");

exports.createCandidatetService = async (data) => {
    const candidate = await Candidate.create(data);
   /*  const {_id:productId,brand}= product;
    //update Brand
  
    const res= await Brand.updateOne(
      {_id:brand.id},
      {$push : {products: productId}}
      ) */

    return candidate;
  };

exports.findAllCandidatetService = async (query) => {
    const candidate = await Candidate.find({...query?.data}).populate('appliedInfo');
   /*  const {_id:productId,brand}= product;
    //update Brand
  
    const res= await Brand.updateOne(
      {_id:brand.id},
      {$push : {products: productId}}
      ) */

    return candidate;
  };
  exports.findOneCandidatetService = async (query) => {
    const candidate = await Candidate.findOne({...query?.data});
   /*  const {_id:productId,brand}= product;
    //update Brand
  
    const res= await Brand.updateOne(
      {_id:brand.id},
      {$push : {products: productId}}
      ) */

    return candidate;
  };