import React, { useEffect, useState, useContext } from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material/';

import FirstDetailsList from '../../src/components/firstDetailsList';
import SecondDetailsList from '../../src/components/secondDetailsList';
import CountryBorders from '../../src/components/countryBorders';
import fetchCountryDetails from '../utils/fetchCountryDetails';

import { DetailsTheme } from '../pages/countryDetails';
import '../index.css'

const StyledName = styled(Typography)(({ theme }) => ({
    fontWeight: '800',
    textDecoration: 'none',
    [theme.breakpoints.down('md')]: {
        marginTop: '-80px'
    },
}));

const StyledRow = styled('div')(() => ({
    fontWeight: '300',
    fontSize: '15px'
}));

const StyledBorderCountries = styled('div')(() => ({
    fontWeight: '600',
    fontSize: '16px',
    marginRight: '5px',
    marginTop: '10px'
}));

const StyledDetailsGrid = styled(Grid)(() => ({
    marginTop: '40px'
}));

const StyledDetailsContainer = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        marginTop: '30px'
    },
    [theme.breakpoints.down('md')]: {
        marginTop: '20px'
    },
}));

const StyledGrid = styled(Grid)(() => ({
    paddingTop: '60px'
}));

const StyledCountryFlag = styled('img')(() => ({
    height: '80%',
    width: '100%',
    objectFit: 'cover'
}));

function CountryInfo({ country }) {
    const { darkTheme } = useContext(DetailsTheme);
    const [countryBorders, setCountryBorders] = useState([]);

    useEffect(() => {
        let bordersName = [];
        if (!country.borders || country.length === 0) return;
        Promise.all(country.borders.map(border => fetchCountryDetails(border)))
            .then(response => {
                response.map(c => {
                    bordersName.push(c[0].name.common);
                    console.log(bordersName)
                })
            })
        setCountryBorders(bordersName)
    }, [country])

    const splitBetweenElements = (elements) => {
        return elements.toString().split(",").join(", ");
    }

    const getDataValues = (key) => {
        let dataValues = [];
        dataValues = Object.values(key)
        dataValues = splitBetweenElements(dataValues);
        return dataValues;
    }

    const getCurrencies = (key) => {
        let countryCurrencies = [];
        Object.keys(key).forEach(currency => {
            countryCurrencies.push(key[currency].name);
        })
        countryCurrencies = splitBetweenElements(countryCurrencies);
        return countryCurrencies;
    }

    if (country.length !== 0) {
        return <StyledGrid container columnSpacing={12} className={darkTheme === 'dark' ? 'dark' : 'light'}>
            <Grid item lg={6} xs={12}>
                <StyledCountryFlag src={country.flags.svg} />
            </Grid>
            <Grid item lg={6} xs={12}>
                <Grid container columns={{ xs: 4, md: 12 }}>
                    <StyledDetailsGrid>
                        <StyledName variant='h4' component="div">{country.name.common}</StyledName>
                        <StyledRow sx={{ marginBottom: '40px' }}>
                            <StyledDetailsContainer container>
                                <FirstDetailsList
                                    nativeName={country.name.nativeName[Object.keys(country.name.nativeName)[0]].official}
                                    population={country.population.toLocaleString()}
                                    region={country.region}
                                    subRegion={country.subregion}
                                    capital={country.capital}
                                />
                                <SecondDetailsList
                                    tld={getDataValues(country.tld)}
                                    currencies={getCurrencies(country.currencies)}
                                    languages={getDataValues(country.languages)}
                                />
                            </StyledDetailsContainer>
                        </StyledRow>
                        <StyledRow>
                            <StyledBorderCountries>
                                Border Countries:
                                <CountryBorders
                                    borders={countryBorders}
                                />
                            </StyledBorderCountries>
                        </StyledRow>
                    </StyledDetailsGrid>
                </Grid>
            </Grid>
        </StyledGrid>
    }
}

export default CountryInfo;