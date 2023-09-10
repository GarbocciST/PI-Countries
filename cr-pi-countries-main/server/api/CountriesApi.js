const axios = require('axios');


const countriesApi = axios.create({
    baseUrl: 'http://localhost:5000/countries'
})

module.exports = countriesApi;