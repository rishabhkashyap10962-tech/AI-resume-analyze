const express=require("express");

const router=express.Router();

const {
    getRecommendedJobs
}=require("../controllers/jobController");

router.get("/:role",getRecommendedJobs);

module.exports=router;