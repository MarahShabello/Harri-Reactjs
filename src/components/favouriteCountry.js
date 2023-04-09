import * as React from 'react';
import { styled } from '@mui/material/styles';
import ClearIcon from '@mui/icons-material/Clear';

const CountryFlag = styled('img')(() => ({
    height: '28px',
    width: '48px',
    marginRight: '10px',
    border: 'none',
    borderRadius: '5px',
    objectFit: 'cover'
}));

const StyledClearIcon = styled(ClearIcon)(() => ({
    borderRadius: '50px',
    padding: '5px',
    fontSize: '25px'
}));

const StyledFavCountry = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '8px'
}));

const FavCountry = styled('span')(() => ({
    fontFamily: 'Nunito Sans',
    fontWeight: '600',
    fontSize: '18px',
}));

function FavouriteCountry(props) {
    return (
        <StyledFavCountry>
            <FavCountry>
                <CountryFlag src={props.flag} />
                {props.name}
            </FavCountry>
            <StyledClearIcon />
        </StyledFavCountry>
    );
}

export default FavouriteCountry;