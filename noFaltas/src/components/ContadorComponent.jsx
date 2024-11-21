import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const ContadorComponent = () => {
    const {contador,incrementar,decrementar,resetear}=useCounter(0)
  
    return (
    <>
        <h2>Contador: {contador}</h2>
        <button className='btn btn-primary' onClick={()=>incrementar()}>+1</button>
        <button className='btn btn-primary' onClick={()=>decrementar(false)}>-1</button>
        <button className='btn btn-danger' onClick={resetear}>Resetear</button>
    </>
  )
}
