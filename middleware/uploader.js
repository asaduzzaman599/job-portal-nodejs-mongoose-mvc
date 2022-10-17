const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
  destination: "resume/",
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + "-" + file.originalname)
  }
})

const uploader = multer({
  storage,
  fileFilter:async (req, file, cb) => {
    const supportedImage = /pdf/;
    const extension = await path.extname(file.originalname);
    if(file.originalname){
      req.body.resumeId = file?.originalname
    }
    if(supportedImage.test(extension)){
      cb(null, true);
    } else{
      cb(new Error("Must be a pdf format"));
    }

  },
  limits: {
    fileSize: 5000000,
  }
})

module.exports = uploader;