
import React,{useState} from 'react';
import Listaus from './Listaus';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    paper: {
      margin:10, 
      padding:10,
    },
    tiedosto: {
      marginLeft: 20, 
      marginRight: 20,
    },
    div: {
      textAlign:'center', 
      marginTop: 10,
    },
    button: {
      marginRight: 20,
    },
    kuva: {
      display: 'none',
    }, 
    typo: {
      marginTop:20,
    },
    otsikko:{
        textAlign: 'center',
        justifyContent: 'center',
    }
  })

function Etusivu(props) {

    const classes = useStyles();

  const [data, setValues] = useState(null);
  
  const [viesti, setViesti] = useState('');

  const muuta = (e) => {
    setValues(e.target.value);
    setViesti('');
  };

  const lisaaVastaus = (e) => {
    e.preventDefault();
    props.setKysely_id(data);
    console.log(data);
    
}

  

  return(
    <div>
      <h1 className={classes.otsikko}>Kyselyt</h1>
    <Listaus setKysely_id={props.setKysely_id}/>
    </div>
  );
}

export default Etusivu;