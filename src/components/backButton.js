import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material/';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const StyledButton = styled(Button)(() => ({
    fontFamily: 'Nunito Sans',
    backgroundColor: '#fff',
    color: '#111517',
}));

const StyledLink = styled(Link)(() => ({
    textDecoration: 'none',
    color: '#111517'
}));

const StyledBackIcon = styled(KeyboardBackspaceIcon)(() => ({
    marginInlineEnd: '10px'
}));

function BackButton() {
    return (
        <StyledLink to="/">
            <StyledButton variant="contained">
                <StyledBackIcon /> Back
            </StyledButton>
        </StyledLink>
    );
}

export default BackButton;