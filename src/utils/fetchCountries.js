import { apiURL } from './api';

const fetchCountries = (countryName) => {
    const api = countryName ? `${apiURL}/name/${countryName}` : `${apiURL}/all`;
    return fetch(api)
      .then(response => {
        return response.json()
      })
      .catch(error => console.log(error))
  }

export default fetchCountries;
