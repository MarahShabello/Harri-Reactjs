import React, { useEffect, useState } from 'react';
import BoxSize from 'react-box-size';
import { CssBaseline } from '@mui/material/';

import AppHeader from '../../src/components/header';
import BackButton from '../../src/components/backButton';

import { useParams } from 'react-router-dom';
import CountryInfo from '../components/countryInfo';
import fetchCountryDetails from '../utils/fetchCountryDetails';
import getFromLocalStorage from '../localStorage/getFromLocalStorage';

function DetailsPage() {
    const darkTheme = getFromLocalStorage('theme');
    console.log(`Theme: ${darkTheme}`)
    const [country, setCountry] = useState([]);
    const { countryCode } = useParams();

    useEffect(() => {
        fetchCountryDetails(countryCode)
            .then(data => {
                setCountry(data)
            })
    }, [countryCode])

    if (country) {
        return (
            <>
                <CssBaseline />
                <AppHeader />
                <BoxSize pv={6} ph={6} className={darkTheme === 'dark' ? 'dark' : 'light'}>
                    <BackButton />
                    <CountryInfo country={country} />
                </BoxSize>
            </>
        );

    }
}

export default DetailsPage;