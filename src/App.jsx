import { useEffect, useState } from 'react'
import axios from 'axios'
import Location from './components/Location'
import Residents from './components/Residents'
import './styles.css'


function App() {
  
    const randomLocationNumber = Math.floor(Math.random(1) * 126)
    
    const [locationId, setLocationId] = useState(randomLocationNumber)
    
    const [dataLocation, setDataLocation] = useState( {} )

    

    useEffect ( () =>{
      /* setLoader(true) */
      axios
      .get( `https://rickandmortyapi.com/api/location/${locationId}` )
      .then ( resp => setDataLocation (resp.data))
      /* setLoader(false) */
      .catch ( error => console.error ( error ) )

    },[])
    
    const getLocation = () => {
      axios
      .get( `https://rickandmortyapi.com/api/location/${locationId}` )
      .then ( resp => setDataLocation (resp.data))
      .catch ( (error) => console.error ( error ) )
    }
  
    console.log(dataLocation.residents)
  return (
    <div className='App'>
      <section className="search-container">
          <input type="text" placeholder="Type 1 of the 126 locations..." id="input" onChange={ (e) => setLocationId(e.target.value)}/>
          <button onClick={ getLocation }>Search  <i className='bx bx-search'></i></button>
      </section>

      <Location
        data = { dataLocation }
      />
      <section className="cardContainer">
       { dataLocation.residents?.map((character)=>(
        <Residents
        url = {character} key = {character}
        />
        ))
      } 
      </section>
              
      
    </div>
   
  )
}

export default App
