  
import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

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
  }
})

export default function AvoinKysymys () {
  const classes = useStyles();

  const [data, setValues] = useState({
      vastaus: '',
      kysymys: null
  });

  const [kysymys, setKysymys] = useState('Kysymys')

  const [viesti, setViesti] = useState('');

  const muuta = (e) => {
    setValues({
      ...data,
      [e.target.name]: e.target.value
    });

    setViesti('');
  };

  const haeKysymys = async () => {
    try {
      const response = await fetch('https://ohjelmistoprojektiserver.herokuapp.com/kysymys/1');
      const json = await response.json();
      console.log(json + "Hei!");
      setKysymys(json);
    } catch (error) {
      console.log(error);
  }
  }

  const lisaaVastaus = (e) => {
    e.preventDefault();


    const formData = {
      vastaus: data.vastaus,
      kysymys: kysymys
    }

    console.log(formData);

    axios.post('https://ohjelmistoprojektiserver.herokuapp.com/kysymys', formData)
    .then(response => {
        if (response.status === 200) {
            setValues({
                vastaus: '',
            });
            setViesti('Vastattu');
        } else {
            setViesti('Vastaus ei onnistunut');
          }
    })
}

useEffect( () => {
  haeKysymys();
}, [])

  return (
    <Paper className={ classes.paper }>
      <Typography>{kysymys}</Typography>
    <form>
      <TextField label={kysymys} name='vastaus' value={ data.vastaus }
        onChange={ (e) => muuta(e) } required fullWidth />

      <div className={ classes.div }>
        <Button onClick={ (e) => lisaaVastaus(e) } variant='contained' color='primary' className={ classes.button} >Ok!</Button>
      </div>
    </form>
    <Typography className={ classes.typo }>{ viesti }</Typography>
    </Paper>
  );
}