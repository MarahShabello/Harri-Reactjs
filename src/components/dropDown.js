import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

import { AppTheme } from '../pages/home';

const StyledBox = styled(Box)(() => ({
  width: '175px',
  borderRadius: '4px',
  border: 'none'
}));

const StyledFormControl = styled(FormControl)(() => ({
  borderRadius: '4px',
  border: 'none'
}));

const StyledSelect = styled(Select)(() => ({
  textAlign: 'left',
  height: '100%',
  borderRadius: '4px',
}));

const BasicSelect = ({ value, onFilter }) => {
  const { darkTheme } = useContext(AppTheme);

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
          <MenuItem value='no-filter'>No filter</MenuItem>
          <MenuItem value='africa'>Africa</MenuItem>
          <MenuItem value='americas'>America</MenuItem>
          <MenuItem value='asia'>Asia</MenuItem>
          <MenuItem value='europe'>Europe</MenuItem>
          <MenuItem value='oceania'>Oceania</MenuItem>
          <MenuItem value='favourites'>Favourites</MenuItem>
        </StyledSelect>
      </StyledFormControl>
    </StyledBox>
  );
}

export default BasicSelect;