import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material/';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function BackButton({ theme }) {
    const StyledButton = styled(Button)(() => ({
        fontFamily: 'Nunito Sans',
        color: theme === 'dark' ? '#fafafa' : '#111517',
        backgroundColor: theme === 'dark' ? '#2b3945' : 'white',
    }));

    const StyledLink = styled(Link)(() => ({
        textDecoration: 'none',
        color: theme === 'dark' ? '#fafafa' : '#111517',
        backgroundColor: theme === 'dark' ? '#2b3945' : 'white',
    }));

    const StyledBackIcon = styled(KeyboardBackspaceIcon)(() => ({
        marginInlineEnd: '10px'
    }));
    
    return (
        <StyledLink to="/">
            <StyledButton variant="contained">
                <StyledBackIcon /> Back
            </StyledButton>
        </StyledLink>
    );
}

export default BackButton;