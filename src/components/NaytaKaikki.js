import React, {useEffect} from 'react';

export default function NaytaKaikki(){

    const haeKaikki = async () => {
        try {
            const response = await fetch('https://ohjelmistoprojektiserver.herokuapp.com/kysymys/1');
            const json = await response.json();
            console.log(json)
            console.log('oioi')
        } catch (error) {
            console.log(error);
        }
    }

    
        useEffect( () => {
            haeKaikki();
       }, [])

       return(
           <p>a</p>
       );
    }