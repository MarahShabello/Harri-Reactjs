import { apiURL } from './api';

const fetchCountryDetails = (code) => {
    const api = `${apiURL}/alpha/${code}`
    return fetch(api)
        .then(response => {
            return response.json()
        })
        .catch(error => console.log(error))
}

export default fetchCountryDetails;
