import React, { useState } from 'react';
import RadioButtonsGroup from './components/RadioButtonsGroup';
import AvoinKysymys from './components/AvoinKysymys';

function App() {

  const [vastaukset, setVastaukset] = useState(['testi']);
  const [vastaus, setVastaus] = useState({vastausId:'', vastaus:''})
 


  return(
    <div>
      <h1>Otsikko</h1>
      <RadioButtonsGroup 
      setVastaukset={setVastaukset}
      vastaukset={vastaukset}
      />
      <AvoinKysymys setVastaukset={setVastaukset}/>
    </div>
  );
}
export default App;