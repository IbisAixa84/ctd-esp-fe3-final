import React from 'react'
import ThemeButton from "./ThemeButton"
import { Link } from 'react-router-dom'
import { routes} from '../routes'
import { useGlobalState } from './utils/Context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state} = useGlobalState()
  const darkMode = state.darkMode

  return (
    <nav className={`navi ${darkMode ? "bg-dark-nav" : "bg-light"}`}>
      <h2>DH Odonto</h2>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div className={`navi ${darkMode ? "bg-dark-nav" : "bg-light"}`}>
        <Link className={`navi ${darkMode ? "bg-dark-nav" : "bg-light"}`} to={routes.home}><h4>Home</h4></Link>
        <Link className={`navi ${darkMode ? "bg-dark-nav" : "bg-light"}`} to={routes.contact}><h4>Contact</h4></Link>
        <Link className={`navi ${darkMode ? "bg-dark-nav" : "bg-light"}`} to={routes.favs}><h4>Favs</h4></Link>
      </div>
        
        <ThemeButton></ThemeButton>
    </nav>
  )
}

export default Navbar