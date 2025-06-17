const mongoose = require('mongoose')

const jobSchema = mongoose.Schema({
   user: {
    type: String,
    required: true,
    
    
   },
   text: {
    type: String,
    required: true
   },
   
}, { timestamps: true })

module.exports = mongoose.model("Job", jobSchema)