import React, {useState} from 'react';
import Header from './Header'
import './App.css';

function App() {
  const[steven, setSteven] = useState(true)
  const[kevin, setKevin] =  useState ('BIG')

  return (
    <div className="App">
      <Header alive={steven}/>
        <input
          type='button'
          onClick={()=>setSteven(!steven)}
          value={steven ?'ERASE THE STEVEN' : 'RESURECT THE STEVEN'}
        />
        <span>
          {steven ? "IT'S ALIIIIIVE" : "REDs IS DEAD"}
        </span>
    </div>
  );
}

export default App;