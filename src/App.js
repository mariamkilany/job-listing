import { useState } from "react";
import SelectedList from "./components/SelectedList";
import JobList from "./components/JobList";

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
    if (type === "languages" || type === "tools") {
      setSelectedList((selected) => {
        return {
          ...selected,
          [type]: [...new Set([...selected[type], skill])],
        };
      });
    }
  }

  // edit delete to take only one arg
  function handleDeleteOne(type, skill) {
    if (type === "role" || type === "level") {
      setSelectedList((prevSelected) => {
        return { ...prevSelected, [type]: "" };
      });
    }
    if (type === "languages" || type === "tools") {
      setSelectedList((prevSelected) => ({
        ...prevSelected,
        [type]: prevSelected[type].filter((item) => item !== skill),
      }));
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

export default App;
