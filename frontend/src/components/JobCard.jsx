function JobCard({ job }) {
  return (
    <div className="job-card">

      <div className="job-header">

        <h4>{job.company}</h4>

        <span className="salary">{job.salary}</span>

      </div>

      <p><strong>Role:</strong> {job.role}</p>

      <p><strong>Location:</strong> {job.location}</p>

      <p>{job.description}</p>

      <div className="job-skills">

        {job.skills.map((skill, index) => (

          <span className="job-skill" key={index}>

            {skill}

          </span>

        ))}

      </div>

      <a

        href={job.applyLink}

        target="_blank"

        rel="noreferrer"

        className="apply-btn"

      >

        Apply Now 🚀

      </a>

    </div>
  );
}

export default JobCard;