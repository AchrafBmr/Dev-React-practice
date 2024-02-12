import React, { useState } from "react";

export default function C3() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState("");
  const [tableData, setTableData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [error , setError]= useState();

  const handleNomChange = (e) => {
    setNom(e.target.value);
  };

  const handlePrenomChange = (e) => {
    setPrenom(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleButtonClick = () => {
    if (nom && prenom && age>0 && age<=20) {
      if (editIndex === -1) {
        setTableData([...tableData, { nom, prenom, age }]);
      } else {
        const updatedData = [...tableData];
        updatedData[editIndex] = { nom, prenom, age };
        setTableData(updatedData);
        setEditIndex(-1);
      }

      setNom("");
      setPrenom("");
      setAge("");
      setError("")
    }else
    {
        setError('age entre 0 et 20')
      alert("Veuillez remplir tous les champs");
    }
  };

  const handleEditClick = (index) => {
    const data = tableData[index];
    setNom(data.nom);
    setPrenom(data.prenom);
    setAge(data.age);
    setEditIndex(index);
  };

  const handleDeleteClick = (index) => {
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData);
  }


  return (
    <div>
    <table>
        <tbody>
          <tr>
            <td>Nom:</td>
            <td>
              <input type="text" value={nom} onChange={handleNomChange} />
            </td>
          </tr>
          <tr>
            <td>Prenom:</td>
            <td>
              <input type="text" value={prenom} onChange={handlePrenomChange} />
            </td>
          </tr>
          <tr>
            <td>Age:</td>
            <td>
              <input type="number" value={age} onChange={handleAgeChange} /><sapn style={{'color':'red'}}>{error}</sapn>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button onClick={handleButtonClick}>
                {editIndex === -1 ? "Ajouter" : "Modifier"}
              </button>
            </td>
          </tr>
        </tbody>
      </table>


      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.nom}</td>
              <td>{data.prenom}</td>
              <td>{data.age}</td>
              <td>
                <button onClick={() => handleEditClick(index)}>Edit</button>
                <button onClick={() => handleDeleteClick(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
      <span>nombres d'etudient {tableData.length}</span>
    </div>
  );
}