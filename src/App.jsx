import { useState } from "react";
import "./App.css";

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
      <p>Ümumi telebe sayı: {inputList.length}</p>
      <input
        type="text"
        placeholder="Telebenin adi"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addInput} type="button">
        Elave et
      </button>

      <ul>
        {inputList.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteInput(index)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
