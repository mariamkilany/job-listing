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

export default App;
