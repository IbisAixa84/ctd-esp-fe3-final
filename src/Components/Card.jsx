import React, { useState } from "react"
import { Link } from "react-router-dom"
import { routes } from "../routes"
import { useGlobalState } from "./utils/global.context"

const Card = ({ name, username, id}) => {

  const {state} = useGlobalState()
  const darkMode = state.darkMode

  const {odontologos, odontologosFav, agregarOdontologoFav} = useGlobalState()
  const [mouseOver, setMouseOver] = useState(false)
  

  const addFav = id => {
  
    const odontologo = odontologos.filter(odontologo => odontologo.id === id)[0];

    if (odontologosFav && !odontologosFav.some( element => element.id === id)){
      agregarOdontologoFav([
        ...odontologosFav,
        odontologo
      ])
      alert('Odontologo agregado a favoritos')
      
    }else alert('Este odontologo ya se encuentra en favoritos')
    
  }


  const change = () => {
    setMouseOver(!mouseOver)
  }

  return (
    
    <div className="card">
        <img src='/images/doctor.jpg' alt='DH-logo'  width={'90%'} height={'90%'}/>
        <Link className={`navi ${darkMode ? "bg-dark-nav" : "bg-light"}`} key={id} to={routes.detail + '/' + id} >{name}</Link>
        <br></br>{username}<br></br><br></br>
        <button className={`${mouseOver ? "favButtonAlt" : "favButton"}`} 
                onClick={ () => addFav(id)} 
                onMouseOver={ change }
                onMouseOut={ change }>
                <img src={window.location.origin + '/images/estrella.png' } 
                alt='DH-logo' width={'10%'}
                />
        </button>
    </div>
  );

}

export default Card;
