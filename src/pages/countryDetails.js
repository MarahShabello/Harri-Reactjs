import React, { useEffect, useState, createContext } from 'react';
// import BoxSize from 'react-box-size';
import { CssBaseline, Box } from '@mui/material/';
import { styled } from '@mui/material/styles';

import AppHeader from '../../src/components/header';
import BackButton from '../../src/components/backButton';

import { useParams } from 'react-router-dom';
import CountryInfo from '../components/countryInfo';
import fetchCountryDetails from '../utils/fetchCountryDetails';
import getFromLocalStorage from '../localStorage/getFromLocalStorage';

export const DetailsTheme = createContext(getFromLocalStorage('theme'))

function DetailsPage() {
    const [country, setCountry] = useState([]);
    const [darkTheme, setDarkTheme] = useState(getFromLocalStorage('theme'));
    const { countryCode } = useParams();

    const StyledBoxSize = styled(Box)(() => ({
        boxSizing: 'border-box',
        padding: '60px'
    }));

    useEffect(() => {
        setDarkTheme(darkTheme)
    }, [darkTheme])

    useEffect(() => {
        fetchCountryDetails(countryCode)
            .then(data => {
                setCountry(data[0])
            })
    }, [countryCode])

    if (country) {
        return (
            <DetailsTheme.Provider value={{ darkTheme, setDarkTheme }}>
                <CssBaseline />
                <AppHeader />
                <StyledBoxSize className={darkTheme === 'dark' ? 'dark' : 'light'}>
                    <BackButton theme={darkTheme} />
                    <CountryInfo country={country} theme={darkTheme} />
                </StyledBoxSize>
            </DetailsTheme.Provider>
        );

    }
}

export default DetailsPage;