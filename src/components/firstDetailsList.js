import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, List, ListItem } from '@mui/material/';

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: 'inerit',
    color: '#111517',
    marginRight: '80px',
    [theme.breakpoints.down('md')]: {
        marginBottom: '40px'
    },
}));

const StyledCountryInfo = styled('span')(() => ({
    fontFamily: 'Nunito Sans',
    fontWeight: '600',
    fontSize: '18px',
    marginInlineEnd: '3px'
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
    marginBottom: '5px',
    fontSize: '18px',
    [theme.breakpoints.down('md')]: {
        marginBottom: '10px'
    },
}));

function FirstDetailsList(props) {
    const { nativeName, population, region, subRegion, capital } = props;
    return (
        <StyledBox>
            <List>
                <StyledListItem disablePadding>
                    <StyledCountryInfo>Native Name:</StyledCountryInfo>
                    {nativeName}
                </StyledListItem>
                <StyledListItem disablePadding>
                    <StyledCountryInfo>Population:</StyledCountryInfo>
                    {population}
                </StyledListItem>
                <StyledListItem disablePadding>
                    <StyledCountryInfo>Region:</StyledCountryInfo>
                    {region}
                </StyledListItem>
                <StyledListItem disablePadding>
                    <StyledCountryInfo>Sub Region:</StyledCountryInfo>
                    {subRegion}
                </StyledListItem>
                <StyledListItem disablePadding>
                    <StyledCountryInfo>Capital:</StyledCountryInfo>
                    {capital}
                </StyledListItem>
            </List>
        </StyledBox>
    );
}

export default FirstDetailsList;