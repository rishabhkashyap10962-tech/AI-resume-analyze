function Courses() {

  const resume = JSON.parse(localStorage.getItem("latestResume"));

  return (

    <div className="container mt-5">

      <h2 className="text-center mb-5">
        📚 Recommended Courses
      </h2>

      <div className="row">

        {

          resume?.courses?.length > 0 ?

          (

            resume.courses.map((course,index)=>(

              <div
                className="col-md-4 mb-4"
                key={index}
              >

                <div className="dashboard-box">

                  <h4>{course}</h4>

                  <p>

                    Improve your skills by learning this course.

                  </p>

                  <button className="btn btn-gradient">

                    Learn Now

                  </button>

                </div>

              </div>

            ))

          )

          :

          (

            <h4>No Courses Available</h4>

          )

        }

      </div>

    </div>

  );

}

export default Courses;