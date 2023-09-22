const { Country, Activity} = require('../db.js');
const { Op } = require('sequelize');
const { mapCountryData } = require('../helpers/countriesMap.js');
const { mapActivityData } = require('../helpers/activityMap.js');

const getInDB = async(id = -1) => {

    if (typeof id === 'string') {
        const country = await Country.findOne({
            where: { 
                id: id.toUpperCase() 
            },
            include: {
                model: Activity,
                attributes: ['name']
            },
            through: {
                attributes: []
            }
        })
        
        if (!country) throw new Error(`No se pudo encontrar el pais con el id ${id}`);
        const countryMap = mapCountryData(country);

        return countryMap;
        
    } else {
        const country = await Country.findAll({
            include: {
                model: Activity,
                attributes: ['name']
            },
            through: {
                attributes: []
            }
        });

        if (!country.length) throw new Error(`No se pudo encontrar ningun pais en la base de datos`);
        const countryMap = mapCountryData(country);

        return countryMap;
    }
}

const getInDBByName = async(name) => {
    const country = await Country.findAll({
        where: {
            name: { [Op.iLike]: `%${name}%` }
        },
        include: {
            model: Activity,
            attributes: ['name']
        },
        through: {
            attributes: []
        }
    });

    if (!country.length) throw new Error(`No se pudo encontrar el pais con el nombre ${name}`);

    const countryMap = mapCountryData(country);

    return countryMap;
}

const getActivitiesInDB = async() => {
    const activities = await Activity.findAll({
        include: {
            model: Country,
            attributes: ['name'],
            through: {
                attributes: []
            }
        },
    });

    if (!activities.length) throw new Error(`No se pudo encontrar ninguna actividad en la base de datos`);

    const activitiesMap = mapActivityData(activities);

    return activitiesMap;
}


module.exports = {
    getInDB,
    getInDBByName,
    getActivitiesInDB
}