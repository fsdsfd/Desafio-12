import React, { useEffect, useState } from 'react'

const Formulario = ({alumnoAEditar, agregarAlumno, setAlumnoAEditar, editarAlumno}) => {
  const formInicial = {
    id: null,
    nombre : '',
    apellido : '',
    edad : '',
    colorFavorito: ''
  }
  useEffect(() => {
    console.log('Cambió el producto a editar') // Si cambia se ejecuta esto
    alumnoAEditar ? setForm(alumnoAEditar): setForm(formInicial)
  }, [alumnoAEditar])
  
  console.log(alumnoAEditar)

  const [form, setForm] = useState(formInicial)
  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const handleReset = ()=>{
    setForm(formInicial)
    setAlumnoAEditar(null)

  }
  const handleSubmit = e=>{
    e.preventDefault()
    console.log('Se envió el alumno')
    if(form.id === null){
      agregarAlumno(form)
    }else{
      editarAlumno(form)
    }
    handleReset()
  }

  return (
    <>
    <h2>Formulario de { alumnoAEditar ? 'edición' : 'creación'}</h2>
    <form className='w-75 border border-danger rounded-3 p-4' onSubmit={handleSubmit}>
    <div className="mb-3">
        {/* Campo nombre */}
        <label htmlFor="lbl-nombre" className="form-label">Nombre</label>
        <input 
        type="text" 
        className="form-control" 
        id="lbl-nombre" 
        placeholder="Ingrese su nombre" 
        name='nombre'
        value = {form.nombre} // Poniendo esto el componente no se puedem cambiar los valores porque le definimos el valor
        onChange={handleChange} // De esta manera si que se puede modificar
        />
    </div>
    <div className="mb-3">
        {/* Campo apellido */}
        <label htmlFor="lbl-apellido" className="form-label">Apellido</label>
        <input 
        type="text"
         className="form-control" 
         id="lbl-apellido" 
         placeholder="Ingrese su apellido" 
         name='apellido'
         value={form.apellido} 
         onChange={handleChange}/>
    </div>

    <div className="mb-3">
        {/* Campo edad */}
        <label htmlFor="lbl-edad" className="form-label">edad</label>
        <input type="text" 
        className="form-control" 
        id="lbl-edad" 
        placeholder="Ingrese el edad" 
        name='edad'
        value={form.edad}
        onChange={handleChange}/>
    </div>
    <div className="mb-3">
        {/* Campo precio */}
        <label htmlFor="lbl-colorFavorito" className="form-label">Color Favorito</label>
        <input type="text" 
        className="form-control" 
        id="lbl-colorFavorito" 
        placeholder="Ingrese el colorFavorito" 
        name='colorFavorito'
        value={form.colorFavorito}
        onChange={handleChange}/>
    </div>
<button type="submit" className="btn btn-dark me-2">{ alumnoAEditar ? 'Guardar' : 'Enviar'}</button>
<button type="reset" className="btn btn-danger" onClick={handleReset}>Resetear</button>

</form>
    </>
  )
}

export default Formulario