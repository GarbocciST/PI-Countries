

const mapCountryData = (countries) => {
    return countries.map(country => {
        return {
            id: country.id,
            name: country.name,
            flag: country.flag,
            continent: country.continent,
            capital: country.capital,
            subregion: country.subregion,
            area: country.area,
            population: country.population,
            activities: country.Activities.map(activity => activity.name)
        }   
    })
}

module.exports = {
    mapCountryData
}