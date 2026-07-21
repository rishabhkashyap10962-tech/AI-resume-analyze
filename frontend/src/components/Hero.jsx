import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-6">

            <div className="badge-box">
              🚀 AI Powered Career Growth Platform
            </div>

            <h1>
              Analyze Your Resume
              <br />
              With AI &
              <br />
              Get Hired Faster
            </h1>

            <p>
              Upload your resume and receive ATS score,
              skill gap analysis,
              personalized learning roadmap,
              interview questions and job recommendations.
            </p>

            <div className="hero-buttons">

              <Link className="btn btn-gradient" to="/upload">
                Analyze Resume
              </Link>

              <Link className="btn btn-outline-light" to="/login">
                Login
              </Link>

            </div>

          </div>

          <div className="col-lg-6">

            <div className="dashboard-card">

              <div className="dashboard-header">
                AI Resume Analysis
              </div>

              <div className="score-circle">
                100%
              </div>

              <h4 className="text-center mb-4">
                ATS Score
              </h4>

              <div className="analysis-box">
                ✔ Resume Quality : Excellent
              </div>

              <div className="analysis-box">
                ✔ Skill Match : 92%
              </div>

              <div className="analysis-box">
                ✔ Recommended Role : Full Stack Developer
              </div>

              <div className="analysis-box">
                ✔ Missing Skills : React, Docker, AWS
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;