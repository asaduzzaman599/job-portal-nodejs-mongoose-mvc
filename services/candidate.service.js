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