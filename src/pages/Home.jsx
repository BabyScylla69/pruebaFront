import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react';

const Home = () => {
  return (
  <>
    <Link to={"/Alta"}>Alta</Link> <br/>
    <Link to={"/Baja"}>Baja</Link> <br/>
    <Link to={"/Consulta"}>Consulta</Link> <br/>

    <h1>HOME PAGE</h1>
  </>
  )
}

export default Home