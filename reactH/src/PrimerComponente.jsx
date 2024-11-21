
const texto="Texto para React"
const numero=666
const sumar=()=>6+6
const p={
    nombre:"Manolo",
    edad:33
}
export const PrimerComponente = () => {
  return (
    <>
        <div>
            <h1>Hola Mundo</h1>
            <p>Nombre de la variable es: {texto}</p>
            <p>Numero de la variable es: {numero}</p>
            <p>El resultado de la suma es: {sumar()}</p>
            <p>El objeto es: {JSON.stringify(p)}</p>
        </div>
    </>
  )
}
