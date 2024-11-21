import React, { useState } from 'react'

const Mio = () => {
    const [n, setClick] = useState(0);

    const mas = () => {
        setClick(n + 1)
    }
    return (
        <button onClick={mas}>Hiciste Click {n} veces</button>
    )
}
const MioDos = ({suma,clicks}) => {
    return(
        <>
        <button onClick={suma}>Hiciste Click {clicks} veces</button>
        </>
    )
}

export const ContadorEspecial = () => {

    const [n, setClick] = useState(0);
    const mas = () => {
        setClick(n + 1)
    }
    return(
        <>
            <Mio/>
            <Mio/>
            <hr/>
            <MioDos suma={mas} clicks={n}/>
            <MioDos suma={mas} clicks={n}/>
        </>
    )
}
