import { useState } from "react"


export const TiempoApp = () => {
  const urlBase="https://api.openweathermap.org/data/2.5/weather"
  const APIkey=import.meta.env.VITE_API_KEY
  const kevin=273
  const [ciudad, setCiudad] = useState("");
 const [dataClima, setDataClima] = useState(null)
  const cambioCiudad=(e)=>{
    setCiudad(e.target.value)
  }
  const manejoSubmit=(e)=>{
    e.preventDefault()
    if(ciudad.trim().length>0)fetchClima()
  }
  const fetchClima=async()=>{
    try{
      const response=await fetch(`${urlBase}?q=${ciudad}&appid=${APIkey}`)
      const data=await response.json()
      setDataClima(data)
      console.log(data)
    }catch(error){
      console.error("Tienes otro problema")
    }
  }
  return (
    <>
      <div className="container">
        <h1>El tiempo</h1>
        <form onSubmit={manejoSubmit}>
          <input type="text" placeholder="ciudad" value={ciudad} onChange={cambioCiudad}/>
          <button type="submit">Buscar</button>
        </form>
        {
          dataClima && (
              <div>
                <h2>
                {dataClima.name}  
                </h2>
                <p>Temperatura:{(dataClima.main.temp - kevin).toFixed(2)} º</p>
              </div>
          )
        }
      </div>
    </>
  )
}
