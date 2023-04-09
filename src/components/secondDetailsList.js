import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, List, ListItem } from '@mui/material/';

const StyledBox = styled(Box)(() => ({
    backgroundColor: 'inherit',
    color: '#111517'
}));

const StyledCountryData = styled('span')(() => ({
    fontFamily: 'Nunito Sans',
    fontWeight: '600',
    fontSize: '18px',
    marginInlineEnd: '3px'
}));

const StyledListItem = styled(ListItem)(({theme}) => ({
    marginBottom: '5px',
    fontSize: '18px',
    [theme.breakpoints.down('md')]: {
        marginBottom: '10px'
    },
}));

function SecondDetailsList(props) {
    return (
        <StyledBox>
            <List>
                <StyledListItem disablePadding>
                    <StyledCountryData>Top Level Domain:</StyledCountryData>
                    {props.tld}
                </StyledListItem>
                <StyledListItem disablePadding>
                    <StyledCountryData>Currencies:</StyledCountryData>
                    {props.currencies}
                </StyledListItem>
                <StyledListItem disablePadding>
                    <StyledCountryData>Languages:</StyledCountryData>
                    {props.languages}
                </StyledListItem>
            </List>
        </StyledBox>
    );
}

export default SecondDetailsList;