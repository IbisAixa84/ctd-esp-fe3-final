import React from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = ({odontologos, odontologosFav, agregarOdontologoFav}) => {
  return (
    <main className="" >
      <h1>Home</h1>
        {/* Aqui deberias renderizar las cards */}
        <div className='card-grid'>
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

        </div>
    </main>
  )
}

export default Home