
import { useState } from "react";
import "./App.css";

import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [input, setInput] = useState("");
  const [inputList, setInputList] = useState([]);

  function addInput() {
    if (input.trim() !== "") {
      setInputList([...inputList, input.trim()]);
      setInput("");
    }
  }

  function deleteInput(index) {
    setInputList(inputList.filter((item, i) => i !== index));
  }

  return (
    <div className="container">
      <h1>Telebe siyahisi</h1>

      <StudentForm
        input={input}
        setInput={setInput}
        addInput={addInput}
      />

      <StudentList
        inputList={inputList}
        deleteInput={deleteInput}
      />
    </div>
  );
}

export default App;
