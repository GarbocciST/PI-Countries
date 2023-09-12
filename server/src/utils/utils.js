const countriesApi = require('../helpers/countriesApi');
const { Country } = require('../db');

const fillDB = async() => {
    try {
        const areCountries = await Country.findAll();
        if(!areCountries.length){
            const {data} = await countriesApi.get('/countries');
            
            const countries = data.map(country => {
                return {
                    id: country.cca3,
                    name: country.name.common,
                    flag: country.flags.svg,
                    continent: country.continents[0],
                    capital: country.capital ? country.capital[0] : 'Capital doesnt exist',
                    subregion: country.subregion ? country.subregion : "Subregion doesnt exist",
                    area: country.area,
                    population: country.population ? country.population : 0,
                }
            });
            await Country.bulkCreate(countries);
        }
        return  console.log('DB filled');

    } catch (error) {
        console.log(error);
        throw new Error(error);
    }

}

module.exports = fillDB;