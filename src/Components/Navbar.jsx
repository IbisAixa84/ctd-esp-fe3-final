import React from 'react'
import ThemeButton from "./ThemeButton"
import { Link } from 'react-router-dom'
import { routes} from '../routes'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      <h2>DH Odonto</h2>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <Link to={routes.home}><h4>Home</h4></Link>
        <Link to={routes.contact}><h4>Contact</h4></Link>
        <Link to={routes.favs}><h4>Favs</h4></Link>
        <ThemeButton></ThemeButton>
    </nav>
  )
}

export default Navbar