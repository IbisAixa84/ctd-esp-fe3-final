import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { themeReducer } from './themeReducer';

const GlobalState = createContext()

const initialState = {
    darkMode: false,
  };

const Context = ({children}) => {
    
    const [odontologos, setOdontologos] = useState([])

    let favoritos = localStorage.getItem('favoritos');
    const listaFavoritos = !favoritos || favoritos ==='' || favoritos === undefined ? [] : JSON.parse(favoritos);

    const [odontologosFav, agregarOdontologoFav] = useState(listaFavoritos)

    const [state, dispatch] = useReducer(themeReducer, initialState);

    const url = 'https://jsonplaceholder.typicode.com/users'

    useEffect( () => {
        fetch(url)
        .then(response => response.json())
        .then(data => setOdontologos(data))
    }, [])    

    useEffect(() => {
       localStorage.setItem('favoritos', JSON.stringify(odontologosFav));  
    }, [odontologosFav])

    return (
      <GlobalState.Provider value={{odontologos, odontologosFav, agregarOdontologoFav, state, dispatch}}>
        {children}
      </GlobalState.Provider>
    )
}

export default Context

export const useGlobalState = () => useContext(GlobalState)
