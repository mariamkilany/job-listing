import { job_list } from "../data";
import Job from "./Job";

export default function JobList({ onAdd, selectedList }) {
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
