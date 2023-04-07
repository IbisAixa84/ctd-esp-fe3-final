import React from 'react'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

function Detail({odontologos}) {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const dentistSelector = {
    name: 'Ibis',
    email: 'ibis@gmail.com',
    phone: '1154545454',
    website: 'www.ibis.com'
  }

  const params = useParams()

  const odontSelected = odontologos.find((odontologo) => parseInt(params.id, 10) === odontologo.id )

  return (
    <div>
        <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Webtide</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{odontSelected.name}</td>
          <td>{dentistSelector.email}</td>
          <td>{dentistSelector.phone}</td>
          <td>{dentistSelector.website}</td>
        </tr>
      </tbody>
      </table>
    </div>
  )
}

export default Detail