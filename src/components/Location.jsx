import React from 'react';
import axios from 'axios';
import App from '../App';


const Location = ( {data} ) => {

  return (
    <div className="header">
        
        <table>
          <thead>
            <tr>
              <th>NOMBRE:</th>
              <th>TIPO:</th>
              <th>DIMENSION:</th>
              <th>POBLACION:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>{data.id} - { data.name }</td>
            <td>{ data.type }</td>
            <td>{ data.dimension }</td>
            <td>{ data.residents?.length }</td> 
            </tr>
            
          </tbody>
        </table>     
      </div>
  );
};

export default Location;