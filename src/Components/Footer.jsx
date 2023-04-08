import React from 'react'

const Footer = () => {
  
  return (
    <footer>
      
      <button
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        className='btn-totop'
        >Ir arriba</button>
      <div>
        <img className="img-logo" src="./images/DH.png" alt='DH-logo'/>
        <img className="img-redes" src="./images/ico-facebook.png" alt='facebook-logo'/>
        <img className="img-redes" src="./images/ico-tiktok.png" alt='tiktok-logo'/>
        <img className="img-redes" src="./images/ico-whatsapp.png" alt='whatsapp-logo'/>
        <img className="img-redes" src="./images/ico-instagram.png" alt='instagram-logo'/>
      </div>  
        
    </footer>
  )
}

export default Footer
