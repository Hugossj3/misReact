import React, { useState } from 'react'

export const AgregarTarea = ({agreTarea}) => {
    const [inputValue,setInput]=useState("")
  
    const onInputChange=(event)=>{
        setInput(event.target.value)
        console.log(inputValue)
    }
    const onSubmit=(event)=>{
        event.preventDefault()
        agreTarea(inputValue)
    }
    return (
    <form onSubmit={onSubmit}>
        <input
         type="text"
         placeholder='Que quieres hacer'
         value={inputValue}
         onChange={onInputChange}
        />
    </form>
  )
}
