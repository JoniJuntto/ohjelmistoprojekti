
import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles({
  paper: {
    margin: 10,
    padding: 10,
  },
  tiedosto: {
    marginLeft: 20,
    marginRight: 20,
  },
  div: {
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    marginRight: 20,
  },
  kuva: {
    display: 'none',
  },
  typo: {
    marginTop: 20,
  }
})

export default function AvoinKysymys(props) {
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
  };


  const lisaaVastaus = (e) => {
    e.preventDefault();


    const formData = {
      vastaus: data.vastaus
    }

    axios.post('https://ohjelmistoprojektiserver.herokuapp.com/api/vastauses', formData)
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


  if (props.avoinData.length > 0) {
    console.log(props.avoinData.length);
    return (
      <div>
        {
          props.avoinData.map(val => {
            return (
              <div>
                <Paper className={classes.paper}>
                  <Typography>{val.key.kysymysteksti}</Typography>
                  <form>
                    <TextField label={val.key.kysymysteksti} name='vastaus' value={data.vastaus}
                      onChange={(e) => muuta(e)} required fullWidth />

                    <div className={classes.div}>
                      <Button onClick={(e) => lisaaVastaus(e)} variant='contained' color='primary' className={classes.button} >Ok!</Button>
                    </div>
                  </form>
                  <Typography className={classes.typo}>{viesti}</Typography>
                </Paper>
              </div>
            )
          })
        }
      </div>
    );
  }

  else{
    console.log(props.avoinData.length);
    return (
    ''
  )};
}