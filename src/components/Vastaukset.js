import React, {useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    paper: {
        margin:10, 
        padding:10,
        marginRight: '25%',
        marginLeft: '25%',
        textAlign:'center',
        justifyContent:'center',
    }
})

export default function Vastaukset() {
    const classes = useStyles();

    const [vastaukset, setVastaukset] = useState([]);

    const kaikkiVastaukset = async () =>{
        try{
            const response = await fetch('https://ohjelmistoprojektiserver.herokuapp.com/api/vastauses')
            const json = await response.json();
            console.log(json)
            setVastaukset(json._embedded.vastauses)
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        kaikkiVastaukset();
    }, []);

    return(
        vastaukset.map((vastaus) =>
        <div>
            <Paper className={classes.paper}>
                <p>{vastaus.vastaus}</p>
                <p>{vastaus._links.kysymys.href}</p>
            </Paper>
        </div>
        )
    );
}