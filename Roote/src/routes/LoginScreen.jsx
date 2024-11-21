import React, { useContext } from 'react'
import { UsuarioContext } from '../context/UsuarioContext'
import { useForm } from '../hooks/useForm'

export const LoginScreen = () => {
    const initialForm={
        nombre:"",
        email:"",
        ciudad:"",
        edad:""
    }
    const {FormState,nombre,email,ciudad,edad,onInputChange}=useForm(initialForm)

    const{setUsuario}=useContext(UsuarioContext)

    const onSubmit=(e)=>{
        e.preventDefault()
        console.log(FormState)
        setUsuario(FormState)
    }
  return (
    <form onSubmit={onSubmit}>
  <div className="mb-3">
    <label htmlFor="nombre" className="form-label">Nombre:</label>
    <input type="text" className="form-control" name='nombre' value={nombre} onChange={onInputChange}/>
    <label htmlFor="email" className="form-label">Email:</label>
    <input type="text" className="form-control" name='email' value={email} onChange={onInputChange}/>
    <label htmlFor="ciudad" className="form-label">Ciudad:</label>
    <input type="text" className="form-control" name='ciudad' value={ciudad} onChange={onInputChange}/>
    <label htmlFor="edad" className="form-label">Edad:</label>
    <input type="text" className="form-control" name='edad' value={edad} onChange={onInputChange}/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}
