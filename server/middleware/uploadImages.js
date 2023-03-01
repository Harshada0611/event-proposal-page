const multer = require('multer');

//Creating a storage object to store the images in destination folder
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + '.jpg'
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})
  
  const upload = multer({ storage: storage })

  module.exports = upload;