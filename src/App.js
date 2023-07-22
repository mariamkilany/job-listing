import { useState } from "react";
import { job_list } from "./data";

function App() {
  const [selectedList, setSelectedList] = useState({
    role: "",
    level: "",
    languages: [],
    tools: [],
  });

  function handleAddSelectedList(skill, type) {
    if (type === "role" || type === "level") {
      setSelectedList((selected) => {
        return { ...selected, ...skill };
      });
    }
    if (type === "languages") {
      setSelectedList((selected) => {
        return {
          ...selected,
          languages: [...new Set([...selected.languages, skill])],
        };
      });
    }
    if (type === "tools") {
      setSelectedList((selected) => {
        return { ...selected, tools: [...new Set([...selected.tools, skill])] };
      });
    }
  }

  function handleDeleteOne(skill, type) {
    if (type === "role") {
      setSelectedList((selected) => {
        return { ...selected, role: "" };
      });
    }
    if (type === "level") {
      setSelectedList((selected) => {
        return { ...selected, level: "" };
      });
    }
    if (type === "languages") {
      setSelectedList((selected) => {
        return {
          ...selected,
          languages: selected.languages.filter((lang) => lang !== skill),
        };
      });
    }
    if (type === "tools") {
      setSelectedList((selected) => {
        return {
          ...selected,
          tools: selected.tools.filter((tool) => tool !== skill),
        };
      });
    }
  }

  function handleDeleteSelectedList() {
    setSelectedList({
      role: "",
      level: "",
      languages: [],
      tools: [],
    });
  }

  return (
    <div className="app-Container">
      <header></header>
      <SelectedList
        selectedList={selectedList}
        onClear={handleDeleteSelectedList}
        onDelete={handleDeleteOne}
      />
      <JobList onAdd={handleAddSelectedList} selectedList={selectedList} />
    </div>
  );
}

function JobList({ onAdd, selectedList }) {
  let filter1 = job_list;
  if (selectedList.role !== "") {
    filter1 = filter1.filter((job) => selectedList.role === job.role);
  }
  if (selectedList.level !== "") {
    filter1 = filter1.filter((job) => selectedList.level === job.level);
  }
  if (selectedList.languages.length > 0) {
    filter1 = filter1.filter((job) =>
      selectedList.languages.every((element) => {
        return job.languages.includes(element);
      })
    );
  }
  if (selectedList.tools.length > 0) {
    filter1 = filter1.filter((job) =>
      selectedList.tools.every((element) => {
        return job.tools.includes(element);
      })
    );
  }
  return (
    <div className="job-list-container">
      {filter1.map((job) => (
        <Job job={job} onAdd={onAdd} />
      ))}
    </div>
  );
}

function Job({ job, onAdd }) {
  return (
    <div className="job" key={job.id}>
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

function SelectedList({ selectedList, onClear, onDelete }) {
  return selectedList.role !== "" ||
    selectedList.level !== "" ||
    selectedList.languages.length > 0 ||
    selectedList.tools.length > 0 ? (
    <div className="selectedList">
      <div>
        {selectedList.role !== "" && (
          <div
            className="job-skill"
            onClick={() => onDelete(selectedList.role, "role")}
          >
            {selectedList.role}
          </div>
        )}
        {selectedList.level !== "" && (
          <div
            className="job-skill"
            onClick={() => onDelete(selectedList.level, "level")}
          >
            {selectedList.level}
          </div>
        )}
        {selectedList.languages.length > 0 &&
          selectedList.languages.map((selected, index) => (
            <div
              className="job-skill"
              key={index}
              onClick={() => onDelete(selected, "languages")}
            >
              {selected}
            </div>
          ))}
        {selectedList.tools.length > 0 &&
          selectedList.tools.map((selected, index) => (
            <div
              className="job-skill"
              key={index}
              onClick={() => onDelete(selected, "tools")}
            >
              {selected}
            </div>
          ))}
      </div>
      <button className="btn" onClick={onClear}>
        clear
      </button>
    </div>
  ) : (
    ""
  );
}

export default App;
