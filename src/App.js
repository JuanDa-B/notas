import React, { useState } from 'react';

/**Ejercicio para realizar el registro de notas de un estudiante */

//Inicializar la función 
function App() {
  //Inicialización del estado para almacenar los datos del formulario
  //estudiantes es el nombre del arreglo donde se almacenará los datos
  const [estudiantes, setEstudiantes] = useState([]);
  const [nombre, setNombre] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');

//Creación del Manejador para el envío del formulario
const handleSubmit = (e) =>{
  e.preventDefault();

  //Creación de un nuevo objeto de estudiante con las notas ingresadas
  const nuevoEstudiante = {
    nombre: nombre,
    nota1: parseFloat(nota1),
    nota2: parseFloat(nota2),
    nota3: parseFloat(nota3)
  };

  // Agregar el nuevo estudiante al estado estudiantes
  setEstudiantes([...estudiantes, nuevoEstudiante]);

  // Limpiaremos los campos del formulario
  setNombre('');
  setNota1('');
  setNota2('');
  setNota3('');
};

return(
  <div>
    <h1>Registro de Notas</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={ (e) => setNombre(e.target.value)}/>
      </label>
      <br/>
      <label>
        Nota 1:
        <input type="number" step="0.01" value={nota1} onChange={(e) => setNota1(e.target.value)}/>
      </label>
      <br/>
      <label>
        Nota 2:
        <input type="number" step="0.01" value={nota2} onChange={(e) => setNota2(e.target.value)}/>
      </label>
      <br/>
      <label>
        Nota 3:
        <input type="number" step="0.01" value={nota3} onChange={(e) => setNota3(e.target.value)}/>
      </label>
      <br/>
      <br/>
      <button type="submit">Registrar nota</button>
    </form>

    <h2>Estudiantes Registrados</h2>
    <ul>
      {estudiantes.map((estudiante, index) => (
        <li key={index}>
          <strong>Nombre:</strong> {estudiante.nombre}, <strong>Nota 1:</strong>{' '} {estudiante.nota1}, <strong>Nota 2:</strong> {' '} {estudiante.nota2}, {' '} <strong>Nota 3:</strong> {estudiante.nota3}
        </li>
      ))}
    </ul>
  </div>
 );
}
export default App;