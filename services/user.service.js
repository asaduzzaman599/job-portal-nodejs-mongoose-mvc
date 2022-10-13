const User = require("../models/User");

exports.createUserService = async (data) => {
    const manager = await User.create(data);
   

    return manager;
  };

  exports.findOneUserService = async (data) => {
    console.log({data})
    const manager = await User.findOne({...data});
   

    return manager;
  };
