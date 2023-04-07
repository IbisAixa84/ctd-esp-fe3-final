import React, { createContext, useEffect } from 'react'

const GlobalState = createContext()

const Context = ({children}) => {
    
    const {odontologos, setOdontologos} = useState([])
    // const url = 'https://jsonplaceholder.typicode.com/users'

    // useEffect( () => {
    //     fetch()
    // }, [])

    return (
    <GlobalState.Provider></GlobalState.Provider>
    )
}

export default Context