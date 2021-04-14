import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import { getDefaultNormalizer } from '@testing-library/react';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));





export default function AvoinKysymys() {
    const [vastaus, setVastaus] = useState({vastausId:'', vastaus:''});
    const classes = useStyles();


    const getData = async () => {
        const url = 'https://formsappi.herokuapp.com/api/'
    
        try {
          const response = await fetch(url);
          var data = await response.json();
          console.log(data);
        } catch (error) {
          console.log('error', error);
        }
    
      }
    

    const onChangeE = (e) => {
        setVastaus({...vastaus, [e.target.name]: e.target.value})
    }

    const buttonPress = () => {
        getData();
        console.log(vastaus);
        axios
        .post('https://formsappi.herokuapp.com/api/', vastaus)
        .then(response => {
            console.log(response)
        })
        .catch(error =>{
            console.log(error);
        })

        
        
        
    }

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField value={vastaus.vastaus} name="vastaus" label="Standard" onChange={onChangeE} />
            </form>
            <Button variant='contained' onClick={buttonPress}>Ok!</Button>
        </div>
    );
}