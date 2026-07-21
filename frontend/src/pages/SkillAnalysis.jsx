function SkillAnalysis() {

  const resume = JSON.parse(localStorage.getItem("latestResume"));

  return (

    <div className="container mt-5">

      <h2 className="text-center mb-5">
        💡 Skill Analysis
      </h2>

      {/* Skills Found */}

      <div className="dashboard-box mb-4">

        <h3>✅ Skills Found</h3>

        <div className="d-flex flex-wrap gap-2 mt-3">

          {resume?.skills?.map((skill,index)=>(

            <span
              key={index}
              className="badge bg-success px-3 py-2"
              style={{
                fontSize:"15px",
                borderRadius:"20px"
              }}
            >

              {skill}

            </span>

          ))}

        </div>

      </div>

      {/* Missing Skills */}

      <div className="dashboard-box">

        <h3>❌ Missing Skills</h3>

        <div className="d-flex flex-wrap gap-2 mt-3">

          {resume?.missingSkills?.map((skill,index)=>(

            <span
              key={index}
              className="badge bg-danger px-3 py-2"
              style={{
                fontSize:"15px",
                borderRadius:"20px"
              }}
            >

              {skill}

            </span>

          ))}

        </div>

      </div>

    </div>

  );

}

export default SkillAnalysis;