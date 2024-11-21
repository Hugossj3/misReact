import React, { useContext } from 'react'
import { UsuarioContext } from '../context/UsuarioContext'

export const HomeScreen = () => {
    const {usuario}=useContext(UsuarioContext)
    const {nombre,email,edad,ciudad}=usuario

    if(!usuario || Object.keys(usuario).length==0){
        return <div className="container">No hay Usuario Registrado</div>
    }
  return (
    <>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Email</th>
      <th scope="col">Edad</th>
      <th scope="col">Ciudad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{nombre}</th>
      <td>{email}</td>
      <td>{edad}</td>
      <td>{ciudad}</td>
    </tr>
  </tbody>
</table>
    </>
  )
}
