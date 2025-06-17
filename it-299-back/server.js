//NOTE TO SELF: CHANGE ROUTES ON THE FRONT END BEFORE DEPLOYMENT
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const dotenv = require('dotenv').config();
const connectDb = require('./config/db.js');
const clients = require('./routes/clientRoutes.js');
const jobs = require('./routes/jobRoutes.js')

connectDb()

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../it-299-project/src/assets/')
    },
    filename: function(req, file, cb) {
        const randomNum = Math.round(Math.random() * 1000)
        cb(null, file.fieldname + randomNum + '.jpg')
    }
})

const upload = multer({ storage: storage })

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/clients', clients);
app.use('/jobs', jobs)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', upload.single('file'), (req,res) => {
    if(!req.body.userId) {
        res.send(400)
        console.log("Error")
    }
})




/*
app.post('/upload', upload.single('file'), (req, res) => {
    console.log(req.file)    
    res.send(req.file.filename)
})
*/
app.listen(3001, console.log("Server started on port 3000"))
