const axios = require("axios");

const analyzeResume = async (resumeText) => {
    try {
        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
              model: "meta-llama/llama-3.1-8b-instruct:free",
              
                messages: [
                    {
                        role: "system",
                        content: "You are an ATS Resume Analyzer."
                    },
                    {
                        role: "user",
                        content: `
Analyze this resume and return ONLY valid JSON.

{
  "atsScore": number,
  "topSkills": [],
  "missingSkills": [],
  "recommendedRole": "",
  "improvements": [],
  "interviewQuestions": []
}

Resume:

${resumeText}
`
                    }
                ]
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                    "HTTP-Referer": "http://localhost:5000",
                    "X-Title": "Placement Assistant"
                }
            }
        );

        return response.data.choices[0].message.content;

    } 
    catch (error) {
    console.log("========== OPENROUTER ERROR ==========");
    console.log(error.response?.status);
    console.log(JSON.stringify(error.response?.data, null, 2));
    console.log("======================================");

    throw error;
}
};

module.exports = analyzeResume;