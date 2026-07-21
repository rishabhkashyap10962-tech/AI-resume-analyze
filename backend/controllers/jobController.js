const Job = require("../models/Job");

const getRecommendedJobs = async (req,res)=>{

    try{

        const role=req.params.role;

        const jobs=await Job.find({
            role:{
                $regex:role,
                $options:"i"
            }
        });

        res.json(jobs);

    }

    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

module.exports={
    getRecommendedJobs
};