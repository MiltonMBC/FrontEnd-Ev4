Evaluación 4
Framework JavaScript


Para este trabajo se realizaron las siguientes configuraciones de rutas

1) importar React-router dom (npm i react-router-dom)
2) Editar APP,js:
3) importar Routers y route desde react-router-dom
import {  Routes,  Route, Link} from "react-router-dom"
4) borrar todo el retur y añadir las rutas
return (
    <>
      <Routes>
        <Route path='/' element={<Pokemon />} />
        <Route path='/pokedex' element={<Pokemon/>} />
      </Routes>
    </>
  )
5)modificar index.js para incluir react-router-dom
import { BrowserRouter } from 'react-router-dom'
<React.StrictMode>
      <BrowserRouter>
            <App />
      </BrowserRouter>
  </React.StrictMode>

Además de aplicar instalar y aplicar boostrap es este proyecto.

Para este trabajo tomamos como ejemplo el juego de cartas de pokemon, tomamos 3 CARDS para que estos posean FRAGMENTOS con distintas caracteristicas.
Tambien cree un FRAGMENT que no este asociado al CARD en este caso es RECOMENDACIONES

http://localhost:3000

Ademas de crear un apartado de recomendaciones para el juego de cartas de pokemon

http://localhost:3000/recomienda
