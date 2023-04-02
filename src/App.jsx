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
import Card from './Components/Card'

function App() {
  
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  //Hacer un llamado a la API para traerte la lista de odontologos
  /* 
  const odontologos = fetch(obtenes la lista de odontologos)
  reemplazas lo de abajo por => const [odontologos, guardarOdontologo] = useState(odontologos)
  */


  const [odontologos, guardarOdontologo] = useState([
    { id: 1, name: 'Guadalupe Sayago', username: 'Lupe2011'},
    { id: 2, name: 'Ibis Fortunato', username: 'Ibis1984'},
    { id: 3, name: 'Pablo Sayago', username: 'Pablo1983'},
    { id: 4, name: 'Lautaro Diosquez', username: 'Lauta2004'}
  ])

  let favoritos = localStorage.getItem('favoritos');

  const listaFavoritos = favoritos==='' || favoritos == undefined ? [] : JSON.parse(favoritos);



  const [odontologosFav, agregarOdontologoFav] = useState(listaFavoritos)

  return (
     
      <div className={`bg ${darkMode ? "bg-dark" : "bg-light"}`}>
        <Navbar/>
          <h1>Hola</h1>
          <Routes>
            <Route path='/' element={<Home/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/detail/:id' element={<Detail/>}/>
              <Route path='/favs/' element={<Favs/>}/>
          </Routes>
        <h1>Lista de Odontologos</h1>
        {odontologos.map(odontologo =>(
          <Card
            key={odontologo.id}
            name={odontologo.name}
            username={odontologo.username}
            id={odontologo.id}
            odontologosFav={odontologosFav}
            agregarOdontologoFav={agregarOdontologoFav}
            odontologos={odontologos}
          />
        ))}
        <Footer/> 
      </div>
  )
}

export default App
