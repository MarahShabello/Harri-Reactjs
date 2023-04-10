import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

import { AppTheme } from '../pages/home';

const BasicSelect = ({ value, onFilter }) => {
  const { darkTheme } = useContext(AppTheme);

  const StyledBox = styled(Box)(() => ({
    width: '175px',
    borderRadius: '4px',
    border: 'none',
    padding: '0'
  }));

  const StyledFormControl = styled(FormControl)(() => ({
    borderRadius: '4px',
    border: 'none',
  }));

  const StyledSelect = styled(Select)(() => ({
    textAlign: 'left',
    height: '100%',
    borderRadius: '4px',
  }));

  const StyledMenuItem = styled(MenuItem)(() => ({
    margin: '-1px',
    color: darkTheme === 'dark' ? '#fafafa' : '#111517',
    backgroundColor: darkTheme === 'dark' ? '#2b3945' : 'white',
  }))

  const handleChange = (event) => {
    onFilter(event.target.value)
  };

  return (
    <StyledBox>
      <StyledFormControl fullWidth className={darkTheme === 'dark' ? 'dark-element' : 'light-element'}>
        <InputLabel id="demo-simple-select-label">Filter By</InputLabel>
        <StyledSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Region"
          onChange={handleChange}
        >
          <StyledMenuItem value='no-filter'>No filter</StyledMenuItem>
          <StyledMenuItem value='africa'>Africa</StyledMenuItem>
          <StyledMenuItem value='americas'>America</StyledMenuItem>
          <StyledMenuItem value='asia'>Asia</StyledMenuItem>
          <StyledMenuItem value='europe'>Europe</StyledMenuItem>
          <StyledMenuItem value='oceania'>Oceania</StyledMenuItem>
          <StyledMenuItem value='favourites'>Favourites</StyledMenuItem>
        </StyledSelect>
      </StyledFormControl>
    </StyledBox>
  );
}

export default BasicSelect;