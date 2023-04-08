import React, { createContext, useContext, useEffect, useState } from 'react'

const GlobalState = createContext()

const Context = ({children}) => {
    
    const [odontologos, setOdontologos] = useState([])

    let favoritos = localStorage.getItem('favoritos');
    const listaFavoritos = !favoritos || favoritos ==='' || favoritos === undefined ? [] : JSON.parse(favoritos);

    const [odontologosFav, agregarOdontologoFav] = useState(listaFavoritos)

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
      <GlobalState.Provider value={{odontologos, odontologosFav, agregarOdontologoFav}}>
        {children}
      </GlobalState.Provider>
    )
}

export default Context

export const useGlobalState = () => useContext(GlobalState)
