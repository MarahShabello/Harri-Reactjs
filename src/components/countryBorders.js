import React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Stack } from '@mui/material/';

const StyledBorder = styled(Button)(() => ({
    fontFamily: 'Nunito Sans',
    backgroundColor: '#fff',
    color: '#111517',
    border: 'none',
    boxShadow: '1px 1px 5px lightgray',
    width: '130px',
    padding: '8px'
}));


function CountryBorders({ borders }) {

    if (borders) {
        return <Stack direction="row" spacing={2}>
            {borders.map(border => {
                return <StyledBorder variant="contained" key={border}>
                {border}
                </StyledBorder>
            })}
        </Stack>
    }
    else {
        return <>No borders</>
    }

}

export default CountryBorders;