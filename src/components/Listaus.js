import React, {useState, useEffect} from 'react';
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
    }
  })

export default function Listaus(props) {
    const classes = useStyles();
    const [kyselyt, setKyselyt] = useState([]);

    const aseta = (kysely,e) =>{
        props.setKysely_id(e.kysely.nimi)
        console.log(e.kysely.nimi)
    }

    const kaikkiKyselyt = async()=>{
        try{
            const response = await fetch('https://ohjelmistoprojektiserver.herokuapp.com/kysely');
            const json = await response.json();
            console.log(json.nimi);
            setKyselyt(json);
        }catch(error){
            console.log(error);
        }
    }
    useEffect( () => {
        kaikkiKyselyt();
      }, [])

    
    return(
        kyselyt.map((kysely) =>
                <div className={classes.root}>
                    <Link onClick={(e) => aseta(kysely,e)} to='/kysely/'>{kysely.nimi}</Link>
                </div>)
    );
}