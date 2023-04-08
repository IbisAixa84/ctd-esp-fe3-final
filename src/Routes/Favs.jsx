import React from "react"
import { useGlobalState } from "../Components/utils/global.context"
import Card from "../Components/Card"

const Favs = () => {

  const {odontologosFav} = useGlobalState()


  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        
        {odontologosFav.map(odontologo =>(
          <Card
            key={odontologo.id}
            name={odontologo.name}
            username={odontologo.username}
            id={odontologo.id}
          />
          ))}

      </div>
    </>
  );
};

export default Favs;
