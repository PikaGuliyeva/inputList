
function StudentList({ inputList, deleteInput }) {
  return (
    <div>
      <p>Ümumi telebe sayı: {inputList.length}</p>

      <ul>
        {inputList.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteInput(index)}>
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
