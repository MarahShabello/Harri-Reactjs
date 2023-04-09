import React, { useContext } from 'react';
import { Grid } from '@mui/material/';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import ActionAreaCard from './components/countryCard';

import { AppTheme } from './pages/home';

const StyledLink = styled(Link)(() => ({
    textDecoration: 'none',
}));

function Countries(props) {
    const { darkTheme } = useContext(AppTheme);
    const { countriesList } = props;

    if (countriesList) {
        return (
            countriesList.map(country => {
                const { name, flags, population, region, capital, cca3 } = country;

                return <Grid item xs={6} md={4} key={cca3}>
                    <StyledLink to={`/details/${cca3}`} className={darkTheme === 'dark' ? 'dark-element' : 'light-element'}>
                        <ActionAreaCard className={darkTheme === 'dark' ? 'dark-element' : 'light-element'}
                            name={name.common}
                            flagURL={flags.svg}
                            population={population.toLocaleString()}
                            region={region}
                            capital={capital}
                            countryCode={cca3}
                        />
                    </StyledLink>
                </Grid>
            })
        );
    }

}

export default Countries;