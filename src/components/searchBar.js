import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Toolbar, InputBase } from '@mui/material';

import { AppTheme } from '../pages/home';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    margin: '0',
    color: '#858585',
    '& .MuiInputBase-input': {
        padding: theme.spacing(2, 2, 2, 0),
        paddingLeft: `calc(1em + ${theme.spacing(6)})`,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '50ch',
        },
    },
}));

const StyledToolbar = styled(Toolbar)(() => ({
    padding: '0',
    margin: '0',
    marginLeft: '-25px'
}));

const StyledBox = styled(Box)(() => ({
    borderRadius: '4px',
}))

function SearchAppBar({ value, onSearch }) {
    const { darkTheme } = useContext(AppTheme);

    const handleChange = (event) => {
        onSearch(event.target.value)
    }

    return (
        <StyledBox className={darkTheme === 'dark' ? 'dark-element' : 'light-element'}>
            <StyledToolbar>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search for a country … "
                        inputProps={{ 'aria-label': 'search' }}
                        value={value}
                        onChange={handleChange}
                    />
                </Search>
            </StyledToolbar>
        </StyledBox>
    );
}

export default SearchAppBar;