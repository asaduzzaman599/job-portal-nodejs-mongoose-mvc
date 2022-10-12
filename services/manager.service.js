const Manager = require("../models/Manager");

exports.createManagertService = async (data) => {
    const manager = await Manager.create(data);
   

    return manager;
  };

  exports.findOneManagerService = async (_id) => {
    const manager = await Manager.findOne({_id});
   

    return manager;
  };

  
  exports.findAllManagerService = async (_id) => {
    const manager = await Manager.find();
   

    return manager;
  };