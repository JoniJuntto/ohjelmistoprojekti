import React, { useState } from 'react';
import RadioButtonsGroup from './components/RadioButtonsGroup';
import Lista from './components/Lista';

function App() {

  const [listValue, setListValue] = useState('');

  return(
    <div>
      <RadioButtonsGroup setList={setListValue}/>
      <Lista listValue={listValue}/>
    </div>
  );
}
export default App;