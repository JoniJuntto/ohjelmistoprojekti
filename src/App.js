
import React, { useState } from 'react';
import RadioKysymys from './components/RadioKysymys';
import AvoinKysymys from './components/AvoinKysymys';

function App() {

  const [vastaukset, setVastaukset] = useState(['testi']);
  const [vastaus, setVastaus] = useState({vastausId:'', vastaus:''})
 


  return(
    <div>
      <h1>Otsikko</h1>
      <RadioKysymys 
      setVastaukset={setVastaukset}
      vastaukset={vastaukset}
      />
      <AvoinKysymys setVastaukset={setVastaukset}/>
    </div>
  );
}
export default App;