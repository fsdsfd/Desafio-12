import React, { useState } from 'react'
import alumnos from './constants/alumnos'
import Tabla from './components/Tabla'
import Formulario from './components/Formulario'
import { v4 as uuidv4 } from 'uuid';
const Inicio = () => {
    const [alumno, setAlumno] = useState(alumnos)
    console.log(alumno)
    const agregarAlumno = (alumnoAgregar)=>{
      alumnoAgregar.id = uuidv4()
      console.log('Agregando el array alumno...', alumnoAgregar)
      const nuevoEstadoAlumnos = [...alumno, alumnoAgregar]
      setAlumno(nuevoEstadoAlumnos)
    }
    const [alumnoAEditar, setAlumnoAEditar] = useState(null)
    const editarAlumno = (alumnoEditado)=>{
      const nuevoEstadoAlumnos = alumno.map(function(estudiante){
        if (estudiante.id === alumnoEditado.id) {
          return alumnoEditado
        }else{
          return estudiante
        }
        
      })
      setAlumno(nuevoEstadoAlumnos)
    }
    const eliminarAlumno = (id)=>{
      console.log('Recibí el id: ', id)
      const nuevoEstadoAlumnos = alumno.filter(function (estudiante) {
        if (estudiante.id !== id) {
          return estudiante
        }else {
          console.log(estudiante, '----> Producto que se va a eliminar', id)
        }
      })
      setAlumno(nuevoEstadoAlumnos)
    }
  return (
    <div className="container">
      <Formulario agregarAlumno={agregarAlumno}
       setAlumnoAEditar={setAlumnoAEditar} 
       editarAlumno={editarAlumno}
      alumnoAEditar={alumnoAEditar}></Formulario>
    <Tabla alumnos={alumno}
     eliminarAlumno={eliminarAlumno}
      setAlumnoAEditar={setAlumnoAEditar}></Tabla>

    </div>
  )
}

export default Inicio