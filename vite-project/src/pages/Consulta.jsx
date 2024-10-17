import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPersons } from '../services/api';

const Consulta = () => {
   const [persons, setPersons] = useState([])

   const listPersonas = persons?.map((item) =>
      <div key={item.id}>
         {item.id} - {item.name} - {item.age}
      </div>
   )

   useEffect(()=>{
      getPersons().then((persona)=>setPersons(persona.data))
   }, [])

   return (
  <>
    <Link to={"/"}>Home</Link> <br/>
    <Link to={"/Alta"}>Alta</Link> <br/>
    <Link to={"/Baja"}>Baja</Link> <br/>
    <br />
    {listPersonas}
  </>
  )
}

export default Consulta