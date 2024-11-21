import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimerComponente } from './primerComponente'
import './index.css'
import { SegundoComponente } from './SegundoComponente'
import { Contador } from './Contador'
import { ListadoApp } from './ListadoApp'
import { ListadoMap } from './ListadoMap'
import { ContadorEspecial } from './ContadorEspecial'
import { UsersApp } from './UsersApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimerComponente/>
    <hr></hr>
    <SegundoComponente
        titulo="React"
        subtitulo="Aprendiendo React"
        numero={23}
    />
    <hr />
    <Contador/>
    <hr />
    <ContadorEspecial/>
    <ListadoApp/>
    <ListadoMap/>
    <hr />
    <UsersApp/>
  </StrictMode>,
)
