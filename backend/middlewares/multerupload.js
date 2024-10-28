const multer = require("multer")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
      },
    filename: (req, file, cb) => {
        console.log(file)
        return cb(null, file.originalname)
  }
})
const upload = multer({
    storage: storage
})

module.exports =upload