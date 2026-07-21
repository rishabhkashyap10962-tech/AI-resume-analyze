const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({

    company:{
        type:String,
        required:true
    },

    role:{
        type:String,
        required:true
    },

    location:String,

    salary:String,

    skills:[String],

    description:String,

    applyLink:String

});

module.exports = mongoose.model("Job",jobSchema);