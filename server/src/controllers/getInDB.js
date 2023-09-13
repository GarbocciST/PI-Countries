const { Country, Activity} = require('../db.js');
const { Op } = require('sequelize');

const getInDB = async(id = -1) => {

    if (typeof id === 'string') {
        const country = await Country.findOne({
            where: { id },
            include: {
                model: Activity,
                attributes: ['name', 'difficulty', 'duration', 'season']
            }
        })
        
        if (!country) throw new Error(`No se pudo encontrar el pais con el id ${id}`);
        return country;
        
    } else {
        const country = await Country.findAll({
            include: {
                model: Activity,
                attributes: ['name', 'difficulty', 'duration', 'season']
            }
        });

        if (!country.length) throw new Error(`No se pudo encontrar ningun pais en la base de datos`);
        return country;
    }
}

const getInDBByName = async(name) => {
    const country = await Country.findAll({
        where: {
            name: { [Op.iLike]: `%${name}%` }
        },
        include: {
            model: Activity,
            attributes: ['name', 'difficulty', 'duration', 'season']
        }
    });

    if (!country.length) throw new Error(`No se pudo encontrar el pais con el nombre ${name}`);
    return country;
}

const getActivitiesInDB = async() => {
    const activities = await Activity.findAll();

    if (!activities.length) throw new Error(`No se pudo encontrar ninguna actividad en la base de datos`);
    return activities;
}


module.exports = {
    getInDB,
    getInDBByName,
    getActivitiesInDB
}