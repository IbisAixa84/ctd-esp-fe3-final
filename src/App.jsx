import { useReducer, useContext } from 'react'
import { Route, Routes } from "react-router-dom"
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import React, {useState} from 'react'
import {ThemeContext} from "./Components/ThemeContext"
import "./App.css"
import { routes } from './routes'
import NotFound from './Routes/NotFound'

function App() {
  
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [odontologos, guardarOdontologo] = useState([
    { id: 1, name: 'Guadalupe Sayago', username: 'Lupe2011'},
    { id: 2, name: 'Ibis Fortunato', username: 'Ibis1984'},
    { id: 3, name: 'Pablo Sayago', username: 'Pablo1983'},
    { id: 4, name: 'Lautaro Diosquez', username: 'Lauta2004'},
    { id: 5, name: 'Guadalupe Sayago', username: 'Lupe2011'},
    { id: 6, name: 'Ibis Fortunato', username: 'Ibis1984'},
    { id: 7, name: 'Pablo Sayago', username: 'Pablo1983'},
    { id: 8, name: 'Lautaro Diosquez', username: 'Lauta2004'},
    { id: 9, name: 'Guadalupe Sayago', username: 'Lupe2011'},
    { id: 10, name: 'Ibis Fortunato', username: 'Ibis1984'},
    { id: 11, name: 'Pablo Sayago', username: 'Pablo1983'},
    { id: 12, name: 'Lautaro Diosquez', username: 'Lauta2004'},
  ])

  let favoritos = localStorage.getItem('favoritos');

  const listaFavoritos = favoritos ==='' || favoritos === undefined ? [] : JSON.parse(favoritos);

  const [odontologosFav, agregarOdontologoFav] = useState(listaFavoritos)

  return (
     
      <div className={`bg ${darkMode ? "bg-dark" : "bg-light"}`}>
        <Navbar/>
          <Routes>
            <Route path={routes.home} element={<Home odontologos={odontologos} odontologosFav={odontologosFav} agregarOdontologoFav={agregarOdontologoFav}/>}/>
            <Route path={routes.contact} element={<Contact/>}/>
            <Route path={routes.detail} element={<Detail/>}/>
            <Route path={routes.favs} element={<Favs/>}/>
            <Route path={routes.notFound} element={<NotFound/>}/>
          </Routes>            
        <Footer/> 
      </div>
  )
}

export default App
