import { useReducer, useContext } from 'react'
import { Route, Routes } from "react-router-dom"
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import {ThemeContext} from "./Components/ThemeContext"
import "./App.css"
import Card from './Components/Card'


function App() {
  
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

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
        <Card/>
        <Footer/> 
      </div>
    
      
  )
}

export default App
