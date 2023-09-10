const axios = require('axios');


export const countriesApi = axios.create({
    baseUrl: 'http://localhost:5000/countries'
})