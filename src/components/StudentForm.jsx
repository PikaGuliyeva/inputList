
function StudentForm({ input, setInput, addInput }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Telebenin adi"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addInput} type="button">
        Elave et
      </button>
    </div>
  );
}

export default StudentForm;
