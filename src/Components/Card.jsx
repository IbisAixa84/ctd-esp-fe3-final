import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";


const Card = ({ name, username, id, odontologosFav, agregarOdontologoFav, odontologos}) => {

  const addFav = id => {
    // Aqui iria la logica para agregar la Card en el localStorage

    console.log(odontologosFav);
  
    const odontologo = odontologos.filter(odontologo => odontologo.id === id)[0];

    if (!odontologosFav.some( element => element.id === id)){
      agregarOdontologoFav([
        ...odontologosFav,
        odontologo
      ])
    }

    localStorage.setItem('favoritos', JSON.stringify(odontologosFav));
    
  }

  return (
    
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src={window.location.origin + '/images/doctor.jpg'} alt='DH-logo'  width={'90%'} height={'90%'}/>
           <Link key={id} to={routes.detail + '/' + id} >{name}</Link>
           <br></br>{username}<br></br>ID = {id} 
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={ () => addFav(id)} className="favButton"><img src={window.location.origin + '/images/estrella.png' }  alt='DH-logo' width={'10%'} /></button>
    </div>
  );

}

export default Card;
