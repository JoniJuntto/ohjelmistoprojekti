import React, { useState, useEffect } from 'react';
import RadioKysymys from './RadioKysymys';
import AvoinKysymys from './AvoinKysymys';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    hela: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '35%',
        marginRight: '35%'
    },
    otsikko: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 35
    }
})



function Kysely(props) {

    const classes = useStyles();
    const [kysely, setKysely] = useState(null)
    const [radioData, setRadioData] = useState([]);
    const [avoinData, setAvoinData] = useState([]);

    const haeKysely = async () => {
        try {
            const response = await fetch('https://ohjelmistoprojektiserver.herokuapp.com/kysymykset/' + props.kysely_id);
            const json = await response.json();
            json.map((singl) => {
                if (singl.kysymystyyppi == true) {
                    console.log('Avoin kysymys')
                    setAvoinData([...avoinData, { key: singl }])
                } else if (singl.kysymystyyppi == false) {
                    console.log('Radio kysymys')
                    setRadioData([...radioData, { key: singl }])
                }
            })
            setKysely(json);
        } catch (error) {
            console.log(error);
        }
    }




    useEffect(() => {
        haeKysely()
    }, [])

    return (
        <div className={classes.hela}>
            <h1 className={classes.otsikko}>{props.kysely_id}</h1>
            <RadioKysymys radioData={radioData} />
            <AvoinKysymys avoinData={avoinData} />
        </div>
    );
}

export default Kysely;