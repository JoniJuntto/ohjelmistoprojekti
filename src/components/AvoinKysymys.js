  
import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import ClearIcon from '@material-ui/icons/Clear';
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
      avoin: false
  });

  const [viesti, setViesti] = useState('');

  const muuta = (e) => {
    setValues({
      ...data,
      [e.target.name]: e.target.value
    });

    setViesti('');
  };

  const lisaaVastaus = (e) => {
    e.preventDefault();


    const formData = {
      vastaus: data.vastaus,
      avoin: true
    }

    console.log(formData);

    axios.post('https://ohjelmistoprojektiserver.herokuapp.com/kysely', formData)
    .then(response => {
        if (response.status === 200) {
            setValues({
                vastaus: '',
                avoin: true
            });
            setViesti('Lisättiin');
        } else {
            setViesti('Lisäys ei onnistunut');
          }
    })
}
   
  const tyhjenna = (e) => {
    e.preventDefault();

    setValues({
        vastaus: '',
        avoin: false
    });

    setViesti('');
  }


  return (
    <Paper className={ classes.paper }>
    <form>
      <TextField label='vastaus' name='vastaus' value={ data.vastaus }
        onChange={ (e) => muuta(e) } required fullWidth />

      <div className={ classes.div }>
        <Button onClick={ (e) => lisaaVastaus(e) } variant='contained' color='primary' className={ classes.button}  startIcon={ <CreateIcon /> }>Lisää</Button>
        <Button onClick={ (e) => tyhjenna(e) } variant='contained' color='secondary' startIcon={ <ClearIcon /> }>Tyhjennä</Button>
      </div>
    </form>
    <Typography className={ classes.typo }>{ viesti }</Typography>
    </Paper>
  );
}