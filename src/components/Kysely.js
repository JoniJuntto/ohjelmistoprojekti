
import React,{useState, useEffect} from 'react';
import RadioKysymys from './RadioKysymys';
import AvoinKysymys from './AvoinKysymys';
import NaytaKaikki from './NaytaKaikki';


function Kysely(props) {

  const [kysely, setKysely] = useState({
    kysely_id:0,
    kyselyn_nimi: "Testi",
    kysymys_id: 1
  })

  const haeKysely = async () => {
    try {
      const response = await fetch('https://ohjelmistoprojektiserver.herokuapp.com/kysely/' + props.kysely_id);
      const json = await response.json();
      console.log(json + "Hei!");
      setKysely(json);
    } catch (error) {
      console.log(error);
  }
  }

  useEffect( () => {
    haeKysely();
    console.log(props.kysely_id)
  }, [])

  return(
    <div>
      <h1>Otsikko</h1>

      <RadioKysymys kysely={kysely}/>
      <AvoinKysymys kysely={kysely}/>
    </div>
  );
}

export default Kysely;