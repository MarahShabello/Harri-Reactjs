import React, { useContext, useState } from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import FavouriteCountry from './favouriteCountry';
import '../index.css'

import { AppTheme } from '../pages/home';
import { useDrop } from 'react-dnd';
import getFromLocalStorage from '../localStorage/getFromLocalStorage';
import setInLocalStorage from '../localStorage/setInLocalStorage';

const Favourites = styled('div')(({ theme }) => ({
    padding: '20px',
    borderRadius: '5px',
    height: '100%',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    },
    [theme.breakpoints.only('md')]: {
        display: 'none'
    },
    [theme.breakpoints.up('lg')]: {
        display: 'block'
    },
}));

const StyledTypography = styled(Typography)(() => ({
    fontWeight: '800',
    fontSize: '28px',
    marginBottom: '25px'
}));

function FavouritesSection({ countries }) {
    const { darkTheme } = useContext(AppTheme);
    let favs = getFromLocalStorage('favourites') || [];

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "CardActionArea",
        drop: (item) => addFavourite(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))

    const addFavourite = (id) => {
        favs.push(id)
        setInLocalStorage('favourites', favs);
    }

    return (
        <Favourites className={darkTheme === 'dark' ? 'dark-element' : 'light-element'} ref={drop} sx={{ border: isOver ? '2px solid #27ae60' : 'none' }}>
            <StyledTypography>Favourites</StyledTypography>
            {(countries) ?
                countries.map(country => {
                    const { name, flags, cca3 } = country;
                    return <FavouriteCountry key={cca3}
                        name={name.common}
                        flag={flags.svg}
                    />
                }) :
                <></>
            }
        </Favourites>
    );

}

export default FavouritesSection;