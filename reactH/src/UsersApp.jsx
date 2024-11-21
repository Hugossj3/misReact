import React, { useEffect, useState } from 'react'

export const UsersApp = () => {
    // URL base de la API
    const [url, setUrl] = useState("users")
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${url}`)
            const data = await response.json()
            setUsers(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [url])

    const cargarUsuario = () => {
        url === "users" ? setUrl("comments") : setUrl("users")
    }

    return (
        <>
            <h1>Listado de {url === "users" ? "Usuarios" : "Comentarios"}</h1>
            <button onClick={cargarUsuario}>
                {url === "users" ? "Cargar Comentarios" : "Cargar Usuarios"}
            </button>
            <ul>
                {url === "users" ?
                    users.map(user =>
                        <li key={user.id}>Nombre: {user.name} Email: {user.email}</li>
                    )
                    :
                    users.map(comment =>
                        <li key={comment.id}>Nombre: {comment.name} <span>{comment.body}</span></li>
                    )
                }
            </ul>
        </>
    )
}
