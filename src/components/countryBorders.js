import React, { createElement } from 'react';
import { styled } from '@mui/material/styles';
import { Button, Stack } from '@mui/material/';
import fetchCountryDetails from '../utils/fetchCountryDetails';

const StyledBorder = styled(Button)(() => ({
    fontFamily: 'Nunito Sans',
    backgroundColor: '#fff',
    color: '#111517',
    border: 'none',
    boxShadow: '1px 1px 5px lightgray',
    width: '130px',
    padding: '8px'
}));

const getName = (border) => {
    fetchCountryDetails(border).then(country => {
        Object.keys(country).map((key) => {
            let countryName = country[key].name.common;
            console.log(`Name: ${countryName}`)
            // return <BorderCountry countryName={countryName}/>
            return countryName;
        })
    });
}

// function BorderCountry({ countryName }) {
//     return createElement(
//         StyledBorder,
//         null,
//         { countryName }
//     );
// }

function CountryBorders({ borders }) {

    if (borders) {
        return <Stack direction="row" spacing={2}>
            {borders.map(border => {
                return <StyledBorder variant="contained" key={border}>
                    {getName(border)}
                </StyledBorder>
            })}
        </Stack>

    }
    else {
        return <>No borders</>
    }

}

export default CountryBorders;