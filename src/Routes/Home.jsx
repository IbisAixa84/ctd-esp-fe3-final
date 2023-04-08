import React from 'react'
import Card from '../Components/Card'
import { useGlobalState } from '../Components/utils/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {odontologos} = useGlobalState()

  return (
    <div className="" >
      <h1>Home</h1>
        {/* Aqui deberias renderizar las cards */}
        <div className='card-grid'>
          {odontologos.map(odontologo =>(
          <Card
            key={odontologo.id}
            name={odontologo.name}
            username={odontologo.username}
            id={odontologo.id}
          />
          ))}

        </div>
    </div>
  )
}

export default Home