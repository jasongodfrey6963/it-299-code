const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../it-299-project/assets/')
    },
    filename: function(req, file, cb) {
        const rndm = Math.round(Math.random() * 1000)
        cb(null, file.fieldname + rndm + '.jpg')
    }
})

const upload = multer({storage: storage})

module.exports = { upload }