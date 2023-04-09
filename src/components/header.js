import React, { useContext } from 'react';
import BoxSize from 'react-box-size';
import ThemeButton from './themeButton';
import { styled } from '@mui/material/styles';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { AppTheme } from '../pages/home';

const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: '#fff',
  width: '100%',
  position: 'static',
  border: 'none',
  boxShadow: '1px 1px 8px lightgray',
}));

const StyledTypography = styled(Typography)(() => ({
  color: '#111517',
  fontWeight: '800'
}));

function AppHeader() {
  const { darkTheme } = useContext(AppTheme);

  return (
    <Box sx={{ flexGrow: 1 }} className={darkTheme === 'dark' ? 'dark-element' : 'light-element'}>
      <StyledAppBar>
        <BoxSize pv={1} ph={4}>
          <Toolbar>
            <StyledTypography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Where in the world?
            </StyledTypography>
            <ThemeButton />
          </Toolbar>
        </BoxSize>
      </StyledAppBar>
    </Box>
  );
}


export default AppHeader;
