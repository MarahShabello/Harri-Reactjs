import React, { useContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { Button } from '@mui/material';
import { AppTheme } from '../pages/home';
import setInLocalStorage from '../localStorage/setInLocalStorage';

function ThemeButton() {
    const [theme, setTheme] = useState('Dark');
    const { darkTheme, setDarkTheme } = useContext(AppTheme);

    const StyledButton = styled(Button)(() => ({
        fontWeight: '800',
        fontSize: '13px',
        color: darkTheme === 'dark' ? '#fafafa' : '#111517',
    }));

    const StyledDarkModeOutlinedIcon = styled(DarkModeOutlinedIcon)(() => ({
        marginInlineEnd: '5px'
    }));

    const StyledLightModeRoundedIcon = styled(LightModeRoundedIcon)(() => ({
        marginInlineEnd: '5px'
    }));

    const switchTheme = () => {
        setTheme(darkTheme)
        if (darkTheme === 'dark') {
            setDarkTheme('light')
            setInLocalStorage('theme', 'light')
        } else {
            setDarkTheme('dark')
            setInLocalStorage('theme', 'dark')
        }
    }

    return (
        <StyledButton onClick={switchTheme}>
            {darkTheme === 'dark' ? <StyledLightModeRoundedIcon /> : <StyledDarkModeOutlinedIcon />}
            {theme} Mode
        </StyledButton>
    );
}

export default ThemeButton;