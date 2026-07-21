function JobRecommendation() {

  const resume = JSON.parse(localStorage.getItem("latestResume"));

  return (

    <div className="container mt-5">

      <h2 className="text-center mb-5">
        💼 Job Recommendations
      </h2>

      <div className="row">

        {resume?.jobRecommendations?.length > 0 ? (

          resume.jobRecommendations.map((job, index) => (

            <div className="col-md-4 mb-4" key={index}>

              <div className="dashboard-box">

                <h4>{job}</h4>

                <p>
                  This job matches your resume skills.
                </p>

                <button className="btn btn-gradient">
                  Apply
                </button>

              </div>

            </div>

          ))

        ) : (

          <h4>No Job Recommendations Found</h4>

        )}

      </div>

    </div>

  );

}

export default JobRecommendation;