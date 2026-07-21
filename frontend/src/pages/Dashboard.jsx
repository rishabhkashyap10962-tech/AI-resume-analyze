import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getResume } from "../services/dashboardService";

import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [resume, setResume] = useState(
  JSON.parse(localStorage.getItem("latestResume")) || null
);

  useEffect(() => {
  const savedResume = localStorage.getItem("latestResume");

  if (savedResume) {
    setResume(JSON.parse(savedResume));
  }
}, []);
 console.log("Resume:", resume);
console.log("Skills:", resume?.skills);
console.log("Missing Skills:", resume?.missingSkills);



  return (
    <div className="dashboard-layout">
      {/* Sidebar */}

      <div className="sidebar">
        <div className="logo">🤖 AI Placement</div>

        <ul>
          <li className="active">📊 Dashboard</li>

          <li>
            <Link
              to="/upload"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              📄 Upload Resume
            </Link>
          </li>

          <li>

  <Link
    to="/ats-score"
    style={{
      color: "white",
      textDecoration: "none"
    }}
  >
    🎯 ATS Score
  </Link>

</li>
          <li>

<Link
to="/skill-analysis"
style={{
color:"white",
textDecoration:"none"
}}
>

💡 Skill Analysis

</Link>

</li>
          <li>

  <Link
    to="/job-recommendation"
    style={{
      color: "white",
      textDecoration: "none",
    }}
  >
    💼 Job Recommendation
  </Link>

</li>
         <li>

<Link
to="/interview-questions"
style={{
color:"white",
textDecoration:"none"
}}
>

🎤 Interview Questions

</Link>

</li> 
          <li>

<Link
to="/courses"
style={{
color:"white",
textDecoration:"none"
}}
>

📚 Courses

</Link>

</li>
        </ul>
      </div>

      {/* Main */}

      <div className="dashboard-content">
        <div className="dashboard-header-top">
          <div>
            <h2>Welcome, {user?.name} 👋</h2>
            <p>AI Resume Analysis Dashboard</p>
          </div>

          <div className="profile-box">
            {user?.name?.charAt(0)}
          </div>
        </div>

        <br />

        {/* Top Cards */}

        <div className="row">

          <div className="col-md-3">
            <div className="dashboard-card-small">

              <div
                style={{
                  width: "110px",
                  margin: "auto",
                }}
              >
                <CircularProgressbar
                  value={resume?.atsScore || 0}
                  text={`${resume?.atsScore || 0}%`}
                  styles={buildStyles({
                    textColor: "#ffffff",
                    pathColor: "#8b5cf6",
                    trailColor: "#2d3748",
                    textSize: "18px",
                  })}
                />
              </div>

              <br />

              <h5>ATS Score</h5>

            </div>
          </div>

          <div className="col-md-3">
            <div className="dashboard-card-small">
              <h3>{resume?.skills?.length || 0}</h3>
              <p>Skills Found</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="dashboard-card-small">
              <h3>{resume?.missingSkills?.length || 0}</h3>
              <p>Missing Skills</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="dashboard-card-small">
              <h3>{resume?.jobRecommendations?.length || 0}</h3>
              <p>Job Matches</p>
            </div>
          </div>

        </div>

        <br />

        {/* Resume Analysis */}

        <div className="dashboard-box">

          <h3>Resume Analysis</h3>

          <hr />

          <p>
            <strong>Uploaded Resume :</strong>{" "}
            {resume?.fileName || "No Resume Uploaded"}
          </p>

          <br />

          <div className="analysis-box">
            ✅ Resume Quality :
            <strong> {resume?.resumeQuality || "--"}</strong>
          </div>

          <div className="analysis-box">
            ✅ Skill Match :
            <strong> {resume?.skillMatch || "--"}</strong>
          </div>

          <div className="analysis-box">
            ✅ Recommended Role :
            <strong> {resume?.recommendedRole || "--"}</strong>
          </div>

          <div className="analysis-box">
            ✅ ATS Score :
            <strong> {resume?.atsScore || 0}%</strong>
          </div>

          <hr />

          <h3>Skills Found</h3>

          <div className="d-flex flex-wrap gap-2 mb-4">
  {resume?.skills &&
    (Array.isArray(resume.skills)
      ? resume.skills.join(" ")
      : resume.skills
    )
      .match(
        /(html|css|javascript|react|node|express|python|java|c\+\+|c|git|github|mongodb|mysql|php|bootstrap|docker|aws|typescript)/gi
      )
      ?.map((skill, index) => (
        <span
          key={index}
          className="badge bg-success px-3 py-2"
          style={{
            fontSize: "15px",
            margin: "5px",
            borderRadius: "20px",
          }}
        >
          {skill}
        </span>
      ))}
</div>

          <hr />

          <h3>Missing Skills</h3>

          <div className="d-flex flex-wrap gap-2 mb-4">
  {resume?.missingSkills &&
    (Array.isArray(resume.missingSkills)
      ? resume.missingSkills.join(" ")
      : resume.missingSkills
    )
      .match(
        /(mongodb|mysql|php|bootstrap|docker|aws|typescript|html|css|javascript|react|node|express|python|java|git|github)/gi
      )
      ?.map((skill, index) => (
        <span
          key={index}
          className="badge bg-danger px-3 py-2"
          style={{
            fontSize: "15px",
            margin: "5px",
            borderRadius: "20px",
          }}
        >
          {skill}
        </span>
      ))}
</div>

          <hr />

          <h3>Recommended Jobs</h3>

          <div className="row">
            {resume?.jobRecommendations?.map((job, index) => (
              <div
                className="col-md-4 mb-3"
                key={index}
              >
                <div className="card bg-dark text-white p-3">
                  <h5>{job}</h5>
                  <p>Suitable according to your resume.</p>
                </div>
              </div>
            ))}
          </div>

          <hr />

          <h3>Recommended Courses</h3>

          <ul className="list-group mb-4">
            {resume?.courses?.map((course, index) => (
              <li
                className="list-group-item"
                key={index}
              >
                📚 {course}
              </li>
            ))}
          </ul>

          <hr />

          <h3>Interview Questions</h3>

          <ul className="list-group mb-4">
            {resume?.interviewQuestions?.map((question, index) => (
              <li
                className="list-group-item"
                key={index}
              >
                🎤 {question}
              </li>
            ))}
          </ul>

          <div className="d-flex gap-3">
            <Link
              to="/upload"
              className="btn btn-primary"
            >
              Upload New Resume
            </Link>

            <button
              className="btn btn-danger"
              onClick={() => {
                localStorage.clear();
                window.location.href = "/login";
              }}
            >
              Logout
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;