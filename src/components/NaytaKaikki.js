import React, {useEffect} from 'react';

export default function NaytaKaikki(){

    const haeKaikki = async () => {
        try {
            const response = await fetch('https://ohjelmistoprojektiserver.herokuapp.com/kysely');
            const json = await response.json();
            console.log(json)
        } catch (error) {
            console.log(error);
        }
    }

    
        useEffect( () => {
            haeKaikki();
       }, [])

       return(
           <p>MOI!</p>
       );
    }