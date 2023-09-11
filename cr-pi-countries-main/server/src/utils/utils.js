const countriesApi = require('../../api/CountriesApi');
const { Country } = require('../../db');


const fillDB = async() => {
    try {
        const areCountries = await Country.findAll();
        if(!areCountries.length){
            const {data} = await countriesApi.get();
            const countries = data.map(country => {
                return {
                    id: country.alpha3Code,
                    name: country.name,
                    flag: country.flag, 
                    continent: country.region,
                    capital: country.capital,
                    subregion: country.subregion,
                    area: country.area,
                    population: country.population
                }
            });
            await Country.bulkCreate(countries);
        }
        return;

    } catch (error) {
        console.log(error);
        throw new Error(error);
    }

}

module.exports = fillDB;