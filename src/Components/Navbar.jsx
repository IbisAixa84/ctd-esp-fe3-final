import React from 'react'
import ThemeButton from "./ThemeButton"
import { Link } from 'react-router-dom'
import { routes} from '../routes'
import { useGlobalState } from './utils/global.context'

const Navbar = () => {

  const {state} = useGlobalState()
  const darkMode = state.darkMode

  return (
    <nav className={`navi ${darkMode ? "bg-dark-nav" : "bg-light"}`}>
      <h2>DH Odonto</h2>
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