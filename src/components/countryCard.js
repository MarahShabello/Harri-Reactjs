import React, { useContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { useDrag } from 'react-dnd';
import { AppTheme } from '../pages/home';

const StyledCountryName = styled(Typography)(() => ({
    fontWeight: '600',
    fontSize: '20px',
    textDecoration: 'none',
    marginBottom: '20px'
}));

const StyledCountryData = styled('span')(() => ({
    fontWeight: '600',
    fontSize: '16px',
    marginRight: '5px'
}));

const StyledRow = styled('div')(() => ({
    fontWeight: '300',
    fontSize: '16px',
    paddingBottom: '5px',
    border: 'none',
    marginTop: '-1px'
}));

const StyledStarIcon = styled(StarRateRoundedIcon)(({ theme }) => ({
    color: 'lightgray',
    fontSize: '35px',
    marginInlineStart: 'auto',
    marginInlineEnd: '5px',
    marginBottom: '5px',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    },
    [theme.breakpoints.only('md')]: {
        display: 'block'
    },
    [theme.breakpoints.up('lg')]: {
        display: 'none'
    },
}));

const SryledCard = styled(Card)(() => ({
    border: 'none',
    borderRadius: '8px',
    boxShadow: '1px 1px 8px lightgray',
    width: 'auto',
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
    paddingTop: '10px',
    paddingLeft: '5px',
    paddingRight: '5px',
    [theme.breakpoints.down('md')]: {
        paddingBottom: '0'
    },
    [theme.breakpoints.up('lg')]: {
        paddingBottom: '20px'
    },
}));

const StyledCardMedia = styled(CardMedia)(() => ({
    height: '165px',
    objectFit: 'cover'
}));

function ActionAreaCard(props) {
    const { darkTheme } = useContext(AppTheme);
    const { flagURL, name, population, region, capital, countryCode } = props;

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "CardActionArea",
        item: { id: countryCode },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }))

    const [isClicked, setIsClicked] = useState(false);
    const handleChange = () => {
        setIsClicked(!isClicked)
    }

    return (
        <SryledCard className={darkTheme === 'dark' ? 'dark-element' : 'light-element'}>

            <CardActionArea className={darkTheme === 'dark' ? 'dark-element' : 'light-element'} ref={drag} sx={{ opacity: isDragging ? "0.5" : "1.0" }}>
                <StyledCardMedia
                    component="img"
                    src={flagURL}
                    alt={name}
                />
                <StyledCardContent className={darkTheme === 'dark' ? 'dark-element' : 'light-element'}>
                    <StyledCountryName gutterBottom variant="h5" component="div">
                        {name}
                    </StyledCountryName>

                    <StyledRow>
                        <StyledCountryData>Population:</StyledCountryData>
                        {population}
                    </StyledRow>
                    <StyledRow>
                        <StyledCountryData>Region:</StyledCountryData>
                        {region}
                    </StyledRow>
                    <StyledRow>
                        <StyledCountryData>Capital:</StyledCountryData>
                        {capital}
                    </StyledRow>
                </StyledCardContent>
            </CardActionArea>
            <StyledRow className={darkTheme === 'dark' ? 'dark-element' : 'light-element'}>
                <StyledStarIcon
                    onClick={handleChange}
                    sx={{ color: isClicked ? 'orange' : 'lightgray' }}
                />
            </StyledRow>

        </SryledCard>
    );
}

export default ActionAreaCard;