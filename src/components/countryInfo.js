import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material/';

import FirstDetailsList from '../../src/components/firstDetailsList';
import SecondDetailsList from '../../src/components/secondDetailsList';
import CountryBorders from '../../src/components/countryBorders';

const StyledName = styled(Typography)(({ theme }) => ({
    fontFamily: 'Nunito Sans',
    fontWeight: '800',
    textDecoration: 'none',
    [theme.breakpoints.down('md')]: {
        marginTop: '-80px'
    },
}));

const StyledRow = styled('div')(() => ({
    fontFamily: 'Nunito Sans',
    fontWeight: '300',
    fontSize: '15px'
}));

const StyledBorderCountries = styled('div')(() => ({
    fontFamily: 'Nunito Sans',
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
    backgroundColor: '#fff',
    paddingTop: '60px'
}));

const StyledCountryFlag = styled('img')(() => ({
    height: '80%',
    width: '100%',
    objectFit: 'cover'
}));

function CountryInfo({ country }) {
    
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

    const getCountryBorders = (key) => {
        if(key){
            console.log(`Key`)
            let countryBorders = [];
            countryBorders = Object.values(key)
            return countryBorders;
        }
        else{
            console.log(`None`)
        }
    }

    return (
        <>
            {
                Object.keys(country).map((key, index) => (

                    (<StyledGrid container spacing={12} key={index}>
                        <Grid item lg={6} xs={12}>
                            <StyledCountryFlag src={country[key].flags.svg} />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <Grid container columns={{ xs: 4, md: 12 }}>
                                <StyledDetailsGrid>
                                    <StyledName variant='h4' component="div">{country[key].name.common}</StyledName>
                                    <StyledRow sx={{ marginBottom: '40px' }}>
                                        <StyledDetailsContainer container>
                                            <FirstDetailsList
                                                nativeName={country[key].name.nativeName[Object.keys(country[key].name.nativeName)[0]].official}
                                                population={country[key].population.toLocaleString()}
                                                region={country[key].region}
                                                subRegion={country[key].subregion}
                                                capital={country[key].capital}
                                            />
                                            <SecondDetailsList
                                                tld={getDataValues(country[key].tld)}
                                                currencies={getCurrencies(country[key].currencies)}
                                                languages={getDataValues(country[key].languages)}
                                            />
                                        </StyledDetailsContainer>
                                    </StyledRow>
                                    <StyledRow>
                                        <StyledBorderCountries>
                                            Border Countries:
                                            <CountryBorders
                                                borders={getCountryBorders(country[key].borders)}
                                            />
                                        </StyledBorderCountries>
                                    </StyledRow>
                                </StyledDetailsGrid>
                            </Grid>

                        </Grid>
                    </StyledGrid>)

                ))
            }
        </>
    );
}

export default CountryInfo;