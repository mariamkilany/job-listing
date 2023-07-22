export default function Job({ job, onAdd }) {
  return (
    <div className={`job ${job.featured ? "border-left" : ""}`} key={job.id}>
      <div className="job-content">
        <img src={job.logo} alt="job-img" className="job-img" />
        <div className="job-info">
          <div className="job-header">
            <span className="company-name">{job.company}</span>
            {job.new && <span className="new">NEW!</span>}
            {job.featured && <span className="featured">FEATURED</span>}
          </div>
          <h4 className="job-title">{job.position}</h4>
          <div className="moreInfo">
            <ul>
              <li>{job.postedAt}</li>
              <li>{job.contract}</li>
              <li>{job.location}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="job-list-skills">
        <span
          className="job-skill"
          onClick={() => onAdd({ role: job.role }, "role")}
        >
          {job.role}
        </span>
        <span
          className="job-skill"
          onClick={() => onAdd({ level: job.level }, "level")}
        >
          {job.level}
        </span>
        {job?.languages.map((language, index) => (
          <span
            className="job-skill"
            key={index}
            onClick={() => onAdd(language, "languages")}
          >
            {language}
          </span>
        ))}
        {job?.tools.map((tool, index) => (
          <span
            className="job-skill"
            key={index}
            onClick={() => onAdd(tool, "tools")}
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
