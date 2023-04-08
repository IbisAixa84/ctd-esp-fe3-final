import React from 'react'
import { useParams } from 'react-router-dom'

function Detail({odontologos}) {

  const params = useParams()

  const odontSelected = odontologos.find((odontologo) => parseInt(params.id, 10) === odontologo.id )

  return (
    <div>
        <h1>Detail Dentist {odontSelected.id} </h1>

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
          <td>{odontSelected.email}</td>
          <td>{odontSelected.phone}</td>
          <td>{odontSelected.website}</td>
        </tr>
      </tbody>
      </table>
    </div>
  )
}

export default Detail