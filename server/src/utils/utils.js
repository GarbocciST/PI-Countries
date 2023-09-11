const countriesApi = require('../../api/CountriesApi');
const { Country } = require('../../db');


const fillDB = async() => {
    try {
        const areCountries = await Country.findAll();
        if(!areCountries.length){
            const {data} = await countriesApi.get();
            const countries = data.map(country => {
                return {
                    id: country.cca3,
                    name: country.name.common,
                    flag: country.flags.svg, 
                    continent: country.continents[0],
                    capital: country.capital[0],
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