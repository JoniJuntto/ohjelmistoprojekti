import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    paper: {
        margin: 10,
        padding: 10,
        marginRight: '35%',
        marginLeft: '35%',
        textAlign: 'center',
        justifyContent: 'center',
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
    link: {
        fontSize: 30,
        textDecoration: 'none',
        color: 'black'
    }
})

export default function Listaus(props) {
    const classes = useStyles();
    const [kyselyt, setKyselyt] = useState([]);

    const aseta = (nimi) => {
        props.setKysely_id(nimi);
    }

    const kaikkiKyselyt = async () => {
        try {
            const response = await fetch('https://ohjelmistoprojektiserver.herokuapp.com/kysely');
            const json = await response.json();
            setKyselyt(json);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        kaikkiKyselyt();
    }, [])


    return (
        kyselyt.map((kysely) =>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Link className={classes.link} onClick={() => aseta(kysely.nimi)} to={`/kysely/${kysely.nimi}`}>{kysely.nimi}</Link>
                </Paper>
            </div>)
    );
}