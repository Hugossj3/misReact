import React, { useState } from 'react'
import { AgregarTarea } from './componentes/AgregarTarea'

const Item = ({name, visto }) => {
    return (
        <>
            <li>{name}{visto ? "✅" : "❌"}</li>

        </>
    )
}

export const ListadoApp = () => {
    let listaTareas = [
        {id:1, name: "HTML", visto: true },
        {id:2, name: "CSS", visto: true },
        {id:3, name: "Git", visto: true },
        {id:4, name: "PHP", visto: true },
        {id:5, name: "SQL", visto: true },
        {id:6, name: "React", visto: true },
        {id:7, name: "Typescript", visto: false },
        {id:8, name: "Angular", visto: false }
    ]
    const [lista, setLista] = useState(listaTareas)
    const addTarea=()=>{
        setLista([...lista,{id:lista.length+1, name:"Recreo", visto:false}])
    }
    const onAgregarTarea=(nombreTarea)=>{
        let nTarea=nombreTarea.trim()

        if(nTarea<1)return


        const nuevaTarea={
            id:lista.length+1,
            name:nTarea,
            visto:false
        }
        setLista([...lista,nuevaTarea])
}
    
    return (
        <>
            <h1>Listado de Tareas</h1>
            <ol>
                {
                    lista.map(tarea=>
                        <Item key={tarea.id} name={tarea.name} visto={tarea.visto}/>
                    )
                }
            </ol>
            <AgregarTarea agreTarea={onAgregarTarea}/>
        </>
    )
}
