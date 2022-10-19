const Manager = require("../models/Manager");
const User = require("../models/User");

exports.createManagertService = async (data) => {
    const manager = await Manager.create(data);
   

    return manager;
  };

  exports.findOneManagerService = async (query) => {
    const manager = await User.find({role:'manager', ...query?.data});
   

    return manager;
  };

  
  exports.findAllManagerService = async (query) => {
    const manager = await User.find({role:'manager',...query?.data}).select({password:0});
   

    return manager;
  };