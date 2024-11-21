import React, { useEffect, useState } from 'react'
import { useFetchData } from '../hooks/useFetchData'

export const UsersList = ({url}) => {
    const {data,loading}=useFetchData({url})

    return (
        <>
            <ul>
                {loading?<p>cargando...</p>:url === "users" ?
                    data.map(user =>
                        <li key={user.id}>Nombre: {user.name} Email: {user.email}</li>
                    )
                    :
                    data.map(comment =>
                        <li key={comment.id}>Nombre: {comment.name} <span>{comment.body}</span></li>
                    )
                }
            </ul>
        </>
    )
}
