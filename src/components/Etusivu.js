
import React, { useState } from 'react';
import Listaus from './Listaus';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    paper: {
        margin: 10,
        marginLeft: '45%',
        marginRight: '45%',
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
    },
    otsikko: {
        textAlign: 'center',
        justifyContent: 'center',
    },
    a: {
        textAlign: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
    }
})

function Etusivu(props) {

    const classes = useStyles();
    const [data, setValues] = useState(null);
    const [viesti, setViesti] = useState('');



    return (
        <div>
            <Paper className={classes.paper}>
                <a className={classes.a} href='https://ohjelmistoprojektiserver.herokuapp.com/addKysely'>Lisää kysely</a>
            </Paper>
            <Paper className={classes.paper}>
                <Link to='/vastaukset'>Vastaukset</Link>
            </Paper>
            <h1 className={classes.otsikko}>Kyselyt</h1>
            <Listaus setKysely_id={props.setKysely_id} />
        </div>
    );
}

export default Etusivu;