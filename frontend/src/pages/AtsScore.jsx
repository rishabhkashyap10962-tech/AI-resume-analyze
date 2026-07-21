import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

function AtsScore() {

  const resume = JSON.parse(localStorage.getItem("latestResume"));

  return (

    <div className="container mt-5">

      <h2 className="text-center mb-5">
        🎯 ATS Score
      </h2>

      <div className="dashboard-box text-center">

        <div
          style={{
            width: "220px",
            margin: "auto",
          }}
        >

          <CircularProgressbar

            value={resume?.atsScore || 0}

            text={`${resume?.atsScore || 0}%`}

            styles={buildStyles({

              textColor: "#fff",

              pathColor: "#8b5cf6",

              trailColor: "#2d3748",

              textSize: "18px"

            })}

          />

        </div>

        <br />

        <div className="analysis-box">

          Resume Quality :
          <strong>
            {" "}
            {resume?.resumeQuality}
          </strong>

        </div>

        <div className="analysis-box">

          Skill Match :
          <strong>
            {" "}
            {resume?.skillMatch}
          </strong>

        </div>

        <div className="analysis-box">

          Recommended Role :
          <strong>
            {" "}
            {resume?.recommendedRole}
          </strong>

        </div>

      </div>

    </div>

  );

}

export default AtsScore;