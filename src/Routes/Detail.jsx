import React from 'react'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const dentistSelector = {
    name: 'Ibis',
    email: 'ibis@gmail.com',
    phone: '1154545454',
    website: 'www.ibis.com'
  }

  return (
    <>
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
          <td>{dentistSelector.name}</td>
          <td>{dentistSelector.email}</td>
          <td>{dentistSelector.phone}</td>
          <td>{dentistSelector.website}</td>
        </tr>
      </tbody>
      </table>
    </>
  )
}

export default Detail