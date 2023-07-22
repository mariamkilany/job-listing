import { job_list } from "../data";
import Job from "./Job";

export default function JobList({ onAdd, selectedList }) {
  let filter1 = job_list;

  ["role", "level", "languages", "tools"].forEach((type) => {
    if (["role", "level"].includes(type)) {
      if (selectedList[type])
        filter1 = filter1.filter((job) => selectedList[type] === job[type]);
    } else {
      filter1 = filter1.filter((job) =>
        selectedList[type].every((element) => {
          return job[type].includes(element);
        })
      );
    }
  });

  return (
    <div className="job-list-container">
      {filter1.map((job, index) => (
        <Job key={index} job={job} onAdd={onAdd} />
      ))}
    </div>
  );
}
