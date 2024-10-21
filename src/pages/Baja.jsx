import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deletePerson } from '../services/api';

const Baja = () => {
  const [id, setId] = useState()
  const handleDelete = () =>{
    deletePerson(id)
  }
  return (
  <>
    <Link to={"/"}>Home</Link> <br/>
    <Link to={"/Alta"}>Alta</Link> <br/>
    <Link to={"/Consulta"}>Consulta</Link> <br/>
    <br />
    <input type="number" onChange={e => setId(e.target.value)} /> <br />
    <button onClick={handleDelete}>Delete</button>
  </>
  )
}

export default Baja