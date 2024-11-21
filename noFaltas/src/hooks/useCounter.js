import { useState } from "react"

export const useCounter=(valor=0)=>{
    const [contador,setContador] = useState(valor)

    const incrementar=(incrementer=1)=>setContador(contador+incrementer)

    const decrementar=(incrementer=1,negativo=true)=>{
        if(!negativo){
            contador>0?setContador(contador-incrementer):setContador(0)
            return
        }
        setContador(contador-incrementer)
    }
    const resetear=()=>setContador(0)

    return{
        contador,
        incrementar,
        decrementar,
        resetear
    }
}