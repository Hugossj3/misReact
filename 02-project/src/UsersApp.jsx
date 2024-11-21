import React, { useState } from 'react'
import { UsersList } from './components/UsersList'

export const UsersApp = () => {
  const [url,setUrl]=useState("users")
  
  const handleFecth=()=>{
    url === "users" ? setUrl("comments") : setUrl("users")
  }
    return (
    <>
        <h1>Listado de Datos</h1>
        <button onClick={handleFecth}>Cargar Datos</button>
        <UsersList url={url}/>
    </>
  )
}
