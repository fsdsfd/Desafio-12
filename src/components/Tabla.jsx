import TablaFila from './TablaFila'

const Tabla = ({alumnos, eliminarAlumno, setAlumnoAEditar}) => {
  console.log(alumnos)
  return (
    <div>
        <h2>Lista de Alumnos</h2>
        <table className='table table-stripped'>
        <thead>
        <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Edad</th>
      <th scope="col">Color Favorito</th>
        </tr>
        </thead>
        

       <tbody>
        {
        alumnos.map((alumno, idx) =>(
            <TablaFila key={idx} alumno = {alumno}
            eliminarAlumno={eliminarAlumno}
            setAlumnoAEditar={setAlumnoAEditar}/>
        ))
        
        }
        </tbody>
        </table>

    </div>
  )
}

export default Tabla