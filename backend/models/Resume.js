const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
{
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    fileName:String,

    filePath:String,

    atsScore:Number,

    resumeQuality:String,

    skillMatch:String,

    recommendedRole:String,

    skills:[String],

    missingSkills:[String],

    jobRecommendations:[String],

    courses:[String],

    interviewQuestions:[String]
},
{
    timestamps:true
});

module.exports = mongoose.model("Resume",resumeSchema);