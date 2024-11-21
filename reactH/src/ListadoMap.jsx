import React from 'react'

const Item=({name, visto})=>{
    return(
        <>
            <li>{name}{visto?"✅":"❌"}</li>
            
        </>
    )
}

export const ListadoMap = () => {
  return (
    <>
        <h1>Listado de Tareas</h1>
        <ol>
            <Item name="HTML" visto={true}/>
            <Item name="CSS" visto={true}/>
            <Item name="Git" visto={true}/>
            <Item name="PHP" visto={true}/>
            <Item name="SQL" visto={true}/>
            <Item name="React" visto={true}/>
            <Item name="Typescript" visto={false}/>
            <Item name="Angular" visto={false}/>
        </ol>
    </>
  )
}
