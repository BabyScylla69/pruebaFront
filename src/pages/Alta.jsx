import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { savePersonName } from '../services/api';

const Alta = () => {
   const [name, setInputName] = useState("")
   const [age, setAge] = useState(0)

   const handleSave = () =>{
        savePersonName({name, age})
   }

   return (
   <>
    <Link to={"/"}>Home</Link> <br/>
    <Link to={"/Baja"}>Baja</Link> <br/>
    <Link to={"/Consulta"}>Consulta</Link> <br/>

    <input type="text" onChange={e => setInputName(e.target.value)}/> 
    <input type="number" onChange={e => setAge(e.target.value)}/>
    <button onClick={() => handleSave()}>Save</button>
   </>
  )
}

export default Alta