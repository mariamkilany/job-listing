export default function SelectedList({ selectedList, onClear, onDelete }) {
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
