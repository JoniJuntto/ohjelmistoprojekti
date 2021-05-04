
import React from 'react';
import RadioKysymys from './components/RadioKysymys';
import AvoinKysymys from './components/AvoinKysymys';
import TestiKomponentti from './components/TestiKomponentti';
import NaytaKaikki from './components/NaytaKaikki';

function App() {

  return(
    <div>
      <TestiKomponentti />
      <NaytaKaikki />
      <h1>Otsikko</h1>

      <RadioKysymys/>
      <AvoinKysymys/>
    </div>
  );
}
export default App;