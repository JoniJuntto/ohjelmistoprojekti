import React, { useEffect } from 'react';

export default function NaytaKaikki() {

    const haeKaikki = async () => {
        try {
            const response = await fetch('https://ohjelmistoprojektiserver.herokuapp.com/kysymys/1');
            const json = await response.json();
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        haeKaikki();
    }, [])

    return (
        <p>a</p>
    );
}