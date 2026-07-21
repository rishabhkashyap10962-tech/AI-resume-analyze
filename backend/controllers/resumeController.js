const Resume = require("../models/Resume");
const fs = require("fs");
const pdf = require("pdf-parse");
const mammoth = require("mammoth");
const analyzeResume = require("../services/atsService");

// ==========================
// Upload Resume
// ==========================

const uploadResume = async (req, res) => {
    try {

        console.log("Step 0 : Upload Started");

        if (!req.file) {
            return res.status(400).json({
                message: "No file uploaded"
            });
        }

        let resumeText = "";

        // ================= PDF =================

        if (req.file.mimetype === "application/pdf") {

            console.log("Step 1 : Reading PDF");

            const dataBuffer = fs.readFileSync(req.file.path);

            const data = await pdf(dataBuffer);

            resumeText = data.text;

        }

        // ================= DOCX =================

        else {

            console.log("Step 1 : Reading DOCX");

            const result = await mammoth.extractRawText({
                path: req.file.path
            });

            resumeText = result.value;

        }

        console.log("Step 2 : Resume Read Successfully");

        // ================= ATS Analysis =================

        const analysis = analyzeResume(resumeText);

        console.log("Step 3 : ATS Analysis Complete");

        // ================= Save in MongoDB =================

        console.log("Step 4 : Saving Resume");

        const resume = await Resume.create({

            user: req.body.userId,

            fileName: req.file.filename,

            filePath: req.file.path,

            atsScore: analysis.atsScore,

            resumeQuality: analysis.resumeQuality,

            skillMatch: analysis.skillMatch,

            recommendedRole: analysis.recommendedRole,

            skills: analysis.skills,

            missingSkills: analysis.missingSkills,

            jobRecommendations: analysis.jobRecommendations,

            courses: analysis.courses,

            interviewQuestions: analysis.interviewQuestions

        });

        console.log("Step 5 : Resume Saved");

        res.status(201).json({

            message: "Resume analyzed successfully",

            analysis,

            resume

        });

    } catch (error) {

        console.log("========= ERROR =========");
        console.log(error);
        console.log("=========================");

        res.status(500).json({

            message: error.message

        });

    }

};

// ==========================
// Get Resume
// ==========================

const getResume = async (req, res) => {

    try {

        const resume = await Resume.findOne({

            user: req.params.userId

        });

        if (!resume) {

            return res.status(404).json({

                message: "Resume not found"

            });

        }

        res.json(resume);

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

module.exports = {

    uploadResume,

    getResume

};