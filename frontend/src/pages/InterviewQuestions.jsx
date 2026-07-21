function InterviewQuestions() {

  const resume = JSON.parse(localStorage.getItem("latestResume"));

  return (

    <div className="container mt-5">

      <h2 className="text-center mb-5">
        🎤 Interview Questions
      </h2>

      {

        resume?.interviewQuestions?.length > 0 ?

        (

          resume.interviewQuestions.map((question,index)=>(

            <div
              className="dashboard-box mb-3"
              key={index}
            >

              <h5>
                Question {index+1}
              </h5>

              <p>{question}</p>

            </div>

          ))

        )

        :

        (

          <h4>No Interview Questions Available</h4>

        )

      }

    </div>

  );

}

export default InterviewQuestions;