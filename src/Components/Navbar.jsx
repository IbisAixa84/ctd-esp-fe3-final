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
        <Link to={routes.home}>Home</Link>
        <Link to={routes.contact}>Contact</Link>
        <Link to={routes.detail}>Detail</Link>
        <Link to={routes.favs}>Favs</Link>
      <ThemeButton></ThemeButton>
    </nav>
  )
}

export default Navbar