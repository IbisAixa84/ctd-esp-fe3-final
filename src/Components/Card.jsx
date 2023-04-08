import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { useGlobalState } from "./utils/Context";


const Card = ({ name, username, id}) => {

  const {odontologos, odontologosFav, agregarOdontologoFav} = useGlobalState()
  

  const addFav = id => {
    // Aqui iria la logica para agregar la Card en el localStorage
  
    const odontologo = odontologos.filter(odontologo => odontologo.id === id)[0];

    if (odontologosFav && !odontologosFav.some( element => element.id === id)){
      agregarOdontologoFav([
        ...odontologosFav,
        odontologo
      ])
      alert('Odontologo agregado a favoritos')
      
    }else alert('Este odontologo ya se encuentra en favoritos')
    
  }

  return (
    
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <img src={window.location.origin + '/images/doctor.jpg'} alt='DH-logo'  width={'90%'} height={'90%'}/>
        <Link key={id} to={routes.detail + '/' + id} >{name}</Link>
        <br></br>{username}<br></br>ID = {id} 
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={ () => addFav(id)} className="favButton"><img src={window.location.origin + '/images/estrella.png' }  alt='DH-logo' width={'10%'} /></button>
    </div>
  );

}

export default Card;
