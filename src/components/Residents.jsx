import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

const Residents = ( { url }) => {

  const [resident, setResident] = useState ({})

  useEffect(() =>{
    axios
    .get( url )
      .then ( resp => setResident (resp.data))
  }, [])

  return (
    <div className="residentCard">
      <img className="card__image" src={resident.image} alt="" />
      <p className="card__status"><span style={{color: resident.status == "Alive" ? "lightgreen" : resident.status == "Dead" ? "red" : "grey"}}><i className='bx bxs-circle'></i></span> {resident.status}</p>
      <div className="card__info">
        <h1 className="card__info__title">{resident.name}</h1>
        <hr />
        <section className='card__info__lists'>
        <ul className="card__info__subtitle--container">
          <li className="card__info__subtitle">Species:</li>
          <li className="card__info__subtitle">Origin:</li>
          <li className="card__info__subtitle">Times appear:</li>
        </ul>
        <ul className="card__info__text--container">
          <li className="card__info__text">{resident.species}</li>
          <li className="card__info__text">{resident.origin?.name}</li>
          <li className="card__info__text">{resident.episode?.length}</li>
        </ul>
        </section>
      </div>
      
    </div>
  );
};

export default Residents;