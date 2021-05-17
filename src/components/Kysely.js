import React,{useState, useEffect} from 'react';
import RadioKysymys from './RadioKysymys';
import AvoinKysymys from './AvoinKysymys';



function Kysely(props) {

  const [kysely, setKysely] = useState(null)
  const [radioData, setRadioData] = useState([]);
  const [avoinData, setAvoinData] = useState([]);

  const haeKysely = async () => {
    try {
      const response = await fetch('https://ohjelmistoprojektiserver.herokuapp.com/kysymykset/' + props.kysely_id);
      const json = await response.json();
      json.map((singl)=>
      {if(singl.kysymystyyppi==true){
          console.log('Avoin kysymys')
          setAvoinData([...avoinData, {key:singl}])
      }else if(singl.kysymystyyppi==false){
        console.log('Radio kysymys')
        setRadioData([...radioData, {key:singl}])
      }
    })
      setKysely(json);
    } catch (error) {
      console.log(error);
    }
    }
    

    

  useEffect( () => {
    haeKysely()
  }, [])

  return(
    <div>
        <RadioKysymys radioData = { radioData }/>
        <AvoinKysymys avoinData = { avoinData } />
    </div>
  );
}

export default Kysely;