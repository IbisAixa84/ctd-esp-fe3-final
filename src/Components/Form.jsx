import React from "react";
import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [user, setUser] = useState({
    name: '',
    email: ''
  })

  const [mensaje, setMensaje] = useState('')
  const [err, setErr] = useState('')
  const errors = [] 

  const handleSubmit = (event) => {
    event.preventDefault()
    if(user.name.length <= 5){
      errors.push({error:'nombre invalido'})
    } 
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    if(!emailRegex.test(user.email)){
      errors.push({error:'email invalido'})
    } 

    if (errors.length === 0) {
      setMensaje(`Gracias ${user.name}, te contactaremos cuando antes vía mail`)
      setErr('')
    }
    else { setErr('Por favor verifique su información nuevamente') }
    
  }


  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input 
        placeholder="Full Name"  
        type="text"
        onChange={(event) => setUser({...user, name: event.target.value})} 
      />
      <input 
        placeholder="Email"
        type="text"
        onChange={(event) => setUser({...user, email: event.target.value})}  
      />
       <button>Send</button>
    </form>
    {err}
    {mensaje ? <h2>Gracias {user.name}, te contactaremos cuando antes vía mail</h2> : <h2></h2>} 

    </div>
  )
}

export default Form;
