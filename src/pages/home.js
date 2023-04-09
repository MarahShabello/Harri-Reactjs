import React, { useEffect, useState, createContext } from 'react';
import BoxSize from 'react-box-size';
import { styled } from '@mui/material/styles';
import { CssBaseline, Box, Grid } from '@mui/material/';

import AppHeader from '../../src/components/header';
import SearchAppBar from '../../src/components/searchBar';
import BasicSelect from '../../src/components/dropDown';
import FavouritesSection from '../../src/components/favSection';

import Countries from '../countries';
import fetchCountries from '../utils/fetchCountries';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import getFromLocalStorage from '../localStorage/getFromLocalStorage';

export const AppTheme = createContext('light');

const StyledBox = styled(Box)(() => ({
  paddingTop: '20px'
}));

const StyledBackground = styled('div')(() => ({
  width: '100%',
  height: '100%'
}));

const StyledSearchFilterContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    rowGap: '40px'
  },
}));

function HomePage() {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filterRegion, setFilterRegion] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [favouriteCountries, setFavouriteCountries] = useState([]);

  const [darkTheme, setDarkTheme] = useState('light');

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchCountries(searchText)
        .then(data => {
          setCountries(data)
        })
    }, 100)

    return () => clearTimeout(debounce)
  }, [searchText])

  useEffect(() => {
    const debounce = setTimeout(() => {
      let filteredData = countries.filter(country => {
        return (!filterRegion || country.region.toLowerCase() === filterRegion || filterRegion === 'no-filter')
      })
      setFilteredCountries(filteredData)
    }, 100)

    return () => clearTimeout(debounce)
  }, [countries, filterRegion])

  useEffect(() => {
    setFavouriteCountries(getFromLocalStorage('favourites'))
    setDarkTheme(getFromLocalStorage('theme'))
  }, [])

  return (
    <AppTheme.Provider value={{ darkTheme, setDarkTheme }}>
      <DndProvider backend={HTML5Backend} >
        <CssBaseline />
        <AppHeader />

        <StyledBackground className={darkTheme === 'dark' ? 'dark' : 'light'}>
          <StyledBox sx={{ flexGrow: 1 }}>
            <BoxSize pv={1} ph={6}>
              <StyledSearchFilterContainer container justifyContent={'space-between'}>
                <SearchAppBar
                  value={searchText}
                  onSearch={(searchValue) => {
                    setSearchText(searchValue)
                  }}
                />
                <BasicSelect
                  value={filterRegion}
                  onFilter={(filterValue) => {
                    setFilterRegion(filterValue)
                  }}
                />
              </StyledSearchFilterContainer>
            </BoxSize>
          </StyledBox>

          <BoxSize pv={1} ph={6}>
            <Grid container spacing={2} paddingTop={3}>
              <Grid item lg={3}>
                <FavouritesSection countries={favouriteCountries} />
              </Grid>
              <Grid item lg={9}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={6} columns={{ xs: 6, md: 12 }}>
                    <Countries countriesList={filteredCountries} />
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </BoxSize>
        </StyledBackground>
      </DndProvider>
    </AppTheme.Provider>
  );
}

export default HomePage;