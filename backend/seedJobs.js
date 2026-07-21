require("dotenv").config();

const mongoose=require("mongoose");

const Job=require("./models/Job");

mongoose.connect(process.env.MONGODB_URI);

const jobs=[

{
company:"Google",
role:"Full Stack Developer",
location:"Bangalore",
salary:"18 LPA",
skills:["React","Node","MongoDB"],
description:"Develop scalable web applications.",
applyLink:"https://careers.google.com"
},

{
company:"Microsoft",
role:"Frontend Developer",
location:"Hyderabad",
salary:"15 LPA",
skills:["HTML","CSS","React"],
description:"Frontend Developer Position",
applyLink:"https://careers.microsoft.com"
},

{
company:"Amazon",
role:"Python Developer",
location:"Noida",
salary:"12 LPA",
skills:["Python","Django"],
description:"Python Backend Developer",
applyLink:"https://amazon.jobs"
},

{
company:"Infosys",
role:"Java Developer",
location:"Pune",
salary:"8 LPA",
skills:["Java","Spring Boot"],
description:"Java Developer",
applyLink:"https://careers.infosys.com"
}

];

async function seed(){

    await Job.deleteMany();

    await Job.insertMany(jobs);

    console.log("Jobs Added");

    process.exit();

}

seed();