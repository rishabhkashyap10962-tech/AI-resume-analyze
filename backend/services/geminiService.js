const axios = require("axios");

async function analyzeResume(resumeText) {

    const prompt = `
You are an ATS Resume Analyzer.

Analyze the following resume.

Return ONLY valid JSON.

{
  "atsScore": 90,
  "resumeQuality": "Excellent",
  "skillMatch": "92%",
  "recommendedRole": "Full Stack Developer",
  "missingSkills": ["React","Docker","AWS"],
  "jobRecommendations": [
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer"
  ],
  "courses": [
    "React Course",
    "Docker Course",
    "AWS Course"
  ],
  "interviewQuestions": [
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4",
    "Question 5"
  ]
}

Resume:

${resumeText}
`;

    const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
            model: "google/gemini-2.5-flash",
            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ]
        },
        {
            headers: {
                Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json"
            }
        }
    );

    return response.data.choices[0].message.content;
}

module.exports = analyzeResume;