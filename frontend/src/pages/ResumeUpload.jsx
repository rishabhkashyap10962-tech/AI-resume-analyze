import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import JobCard from "../components/JobCard";

function ResumeUpload() {

    const [file, setFile] = useState(null);
    const [analysis, setAnalysis] = useState(null);
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();
const [loading,setLoading]=useState(false);

    const handleUpload = async () => {

        if (!file) {
            alert("Please select a resume.");
            return;
        }

        const formData = new FormData();

        const storedUser = localStorage.getItem("user");
        const user = storedUser ? JSON.parse(storedUser) : null;

        if (!user || !user.id) {
            alert("User not found. Please login again.");
            return;
        }

        formData.append("resume", file);
        formData.append("userId", user.id);

        try {
            setLoading(true);
            const res = await axios.post(
                "http://localhost:5000/api/resume/upload",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            alert("Resume Uploaded Successfully");

            setAnalysis(res.data.analysis);

            const jobRes = await axios.get(
                `http://localhost:5000/api/jobs/${res.data.analysis.recommendedRole}`
            );

            setJobs(jobRes.data);
 
            localStorage.setItem(
  "latestResume",
  JSON.stringify(res.data.analysis)
);

navigate("/dashboard");




        } catch (err) {

            console.log(err);

            alert(err.response?.data?.message || err.message);

        }

    };

    return (

        <div className="container mt-5">

            <h2 className="mb-4 text-center">
                AI Resume Analyzer
            </h2>

            <div className="upload-card">

                <div className="upload-area">

    <div className="upload-icon">

        📄

    </div>

    <h3>Upload Your Resume</h3>

    <p>

        PDF or DOCX Supported

    </p>

    <input

        type="file"

        id="resumeFile"

        hidden

        onChange={(e)=>setFile(e.target.files[0])}

    />

    <label
        htmlFor="resumeFile"
        className="btn-gradient"
    >

        Choose Resume

    </label>

    <br /><br />

    {

        file && (

            <h5>

                ✅ {file.name}

            </h5>

        )

    }

    <br />

    <button

        className="analyze-btn"

        onClick={handleUpload}

    >

        🤖 Analyze Resume

    </button>

</div>

            </div>
                  
{
loading && (

<div className="loader-section">

<div className="loader"></div>

<h3>

🤖 AI is scanning your resume...

</h3>

<p>

Checking ATS Score...

</p>

</div>

)
}












            {analysis && (

                <div className="mt-5">

                    <div className="dashboard-box">

                        <h3>📊 Resume Analysis</h3>

                        <hr />

                        <div className="analysis-box">
                            <strong>ATS Score:</strong> {analysis.atsScore}%
                        </div>

                        <div className="analysis-box">
                            <strong>Resume Quality:</strong> {analysis.resumeQuality}
                        </div>

                        <div className="analysis-box">
                            <strong>Skill Match:</strong> {analysis.skillMatch}
                        </div>

                        <div className="analysis-box">
                            <strong>Recommended Role:</strong> {analysis.recommendedRole}
                        </div>

                    </div>

                    <br />

                    <div className="dashboard-box">

                        <h3>💻 Skills Found</h3>

                        <div className="skill-container">

                            {analysis.skills.map((skill, index) => (

                                <span className="skill-badge" key={index}>
                                    {skill}
                                </span>

                            ))}

                        </div>

                    </div>

                    <br />

                    <div className="dashboard-box">

                        <h3>❌ Missing Skills</h3>

                        <div className="skill-container">

                            {analysis.missingSkills.map((skill, index) => (

                                <span className="missing-badge" key={index}>
                                    {skill}
                                </span>

                            ))}

                        </div>

                    </div>

                    <br />

                    <div className="dashboard-box">

                        <h3>📚 Recommended Courses</h3>

                        <div className="recommend-grid">

                            {analysis.courses.map((course, index) => (

                                <div className="recommend-card" key={index}>

                                    <h5>{course}</h5>

                                </div>

                            ))}

                        </div>

                    </div>

                    <br />

                    <div className="dashboard-box">

                        <h3>🎤 Interview Questions</h3>

                        {analysis.interviewQuestions.map((question, index) => (

                            <div
                                className="analysis-box"
                                key={index}
                            >
                                {index + 1}. {question}
                            </div>

                        ))}

                    </div>

                    <br />

                    <div className="dashboard-box">

                        <h3>💼 Recommended Jobs</h3>

                        {jobs.length === 0 ? (

                            <p>No jobs found.</p>

                        ) : (

                            <div className="recommend-grid">

                                {jobs.map((job, index) => (

                                    <JobCard
                                        key={index}
                                        job={job}
                                    />

                                ))}

                            </div>

                        )}

                    </div>

                </div>

            )}

        </div>

    );

}

export default ResumeUpload;