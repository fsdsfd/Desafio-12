import React from 'react'
import { notificacionSweet } from './TablaFila.service'

const TablaFila = ({alumno, eliminarAlumno, setAlumnoAEditar}) => {
  const handleEliminar = ()=>{
    //console.log(product.id)
    console.log('hicieron click')
    notificacionSweet(alumno.apellido,()=>{
      eliminarAlumno(alumno.id)
    })
  }
  const handleEditar = (alumno)=>{
      console.log(alumno)
      setAlumnoAEditar(alumno)
  }
  return (

    <tr>
      <td>{alumno.nombre}</td>
      <td>{alumno.apellido}</td>
      <td>{alumno.edad}</td>
      <td>{alumno.colorFavorito}</td>     
      <td>
      <button className="btn btn-warning" onClick={()=>handleEditar(alumno)}>Editar</button>
      <button className="btn btn-danger" onClick={handleEliminar}>Eliminar</button>
      </td>        
    </tr>
    
  )
}

export default TablaFila