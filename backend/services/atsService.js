const allSkills = [

"html",
"css",
"javascript",
"react",
"node",
"express",
"mongodb",
"mysql",
"python",
"java",
"c++",
"php",
"bootstrap",
"git",
"github",
"docker",
"aws",
"typescript"

];

function analyzeResume(text){

text=text.toLowerCase();

let foundSkills=[];

let missingSkills=[];

allSkills.forEach(skill=>{

if(text.includes(skill))
foundSkills.push(skill);

else
missingSkills.push(skill);

});

let atsScore=Math.min(100,40+foundSkills.length*4);

let quality="Poor";

if(atsScore>=80)
quality="Excellent";

else if(atsScore>=60)
quality="Good";

else if(atsScore>=40)
quality="Average";

let role="Software Developer";

if(foundSkills.includes("react") && foundSkills.includes("node"))

role="Full Stack Developer";

else if(foundSkills.includes("react"))

role="Frontend Developer";

else if(foundSkills.includes("python"))

role="Python Developer";

else if(foundSkills.includes("java"))

role="Java Developer";

const jobs=[role];

const courses=missingSkills.slice(0,5).map(skill=>`${skill.toUpperCase()} Complete Course`);

const interviewQuestions=foundSkills.slice(0,5).map(skill=>`Explain ${skill} with an example.`);

return{

atsScore,

resumeQuality:quality,

skillMatch:`${foundSkills.length}/${allSkills.length}`,

recommendedRole:role,

skills:foundSkills,

missingSkills,

jobRecommendations:jobs,

courses,

interviewQuestions

};

}

module.exports=analyzeResume;