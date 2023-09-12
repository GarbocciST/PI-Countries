
const axios = require('axios');


const countriesApi = axios.create({
    baseURL: 'http://localhost:5000' 
});

module.exports = countriesApi;