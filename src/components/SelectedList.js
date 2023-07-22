export default function SelectedList({
  selectedList: { role, level, languages, tools },
  onClear,
  onDelete,
}) {
  const valuesToCheck = [role, level, languages.length, tools.length];
  let continueCode = false;
  for (let i = 0; i < valuesToCheck.length; i++) {
    if (valuesToCheck[i]) {
      continueCode = true;
      break;
    }
  }
  if (!continueCode) return;
  return (
    <div className="selectedList">
      <div>
        {role !== "" && (
          <div className="job-skill" onClick={() => onDelete("role")}>
            {role}
          </div>
        )}
        {level !== "" && (
          <div className="job-skill" onClick={() => onDelete("level")}>
            {level}
          </div>
        )}
        {languages.length > 0 &&
          languages.map((selected, index) => (
            <div
              className="job-skill"
              key={index}
              onClick={() => onDelete("languages", selected)}
            >
              {selected}
            </div>
          ))}
        {tools.length > 0 &&
          tools.map((selected, index) => (
            <div
              className="job-skill"
              key={index}
              onClick={() => onDelete("tools", selected)}
            >
              {selected}
            </div>
          ))}
      </div>
      <button className="btn" onClick={onClear}>
        clear
      </button>
    </div>
  );
}
