import { useContext, useEffect } from 'react'
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
import { useGlobalState } from './Components/utils/Context'

function App() {
  
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;

  const {odontologos} = useGlobalState()

  return (
     
      <div className='app'>
        {/* {`bg ${darkMode ? "bg-dark" : "bg-light"}`}> */}
        <Navbar/>
          <Routes>
            <Route path={routes.home} element={<Home/>}/>
            <Route path={routes.contact} element={<Contact/>}/>
            <Route path={routes.detail} element={<Detail odontologos={odontologos}/>}/>
            <Route path={routes.detail + '/:id'} element={<Detail odontologos={odontologos}/>}/>
            <Route path={routes.favs} element={<Favs/>}/>
            <Route path={routes.notFound} element={<NotFound/>}/>
          </Routes>            
        <Footer/> 
      </div>
  )
}

export default App
