import { useState } from "react"

let clicks=0

const Boton=({value=0})=>{
    // useState es un hook
    // es una funcion que controla el estado de la variable
    const [contador,setContador]=useState(value)
   
    const contaClicks=()=>{
        setContador(contador+1)
    }
    
    return (
        <button onClick={contaClicks}>{contador}</button>
    )
}

export const Contador = () => {
    
  return (
    <>
        <h1>Contador</h1>
        <Boton value={10}/>
    </>
  )
}
