import React, {useState, useEffect} from 'react';
import axios from 'axios';

import BeerCard from './component/BeerCard'
import Header from './Header'
import './App.css';

function App() {
  const[steven, setSteven] = useState(true)
  const[kevin, setKevin] =  useState ('BIG')
  const[randomBeer, setRandomBeer] = useState({})

  const fetchBeer = () => {
    axios.get('https://api.punkapi.com/v2/beers/random')
    .then(res => res.data)
    .then(data => setRandomBeer(data[0]))
  }
  useEffect(() => {
    fetchBeer()
  }, [])

  return (
    <div className="App">
      <Header alive={steven}/>
      <BeerCard beer={randomBeer} />
        <input
          type='button'
          onClick={()=>fetchBeer()}
          value='generate a beer !'
        />
    </div>
  );
}

export default App;
