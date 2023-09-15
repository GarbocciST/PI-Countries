const { Activity, Country } = require('../db.js');

const addActivityInDB = async( name, difficulty, duration, season, countries ) => {

    if(!name || !difficulty || !season || !countries) throw new Error('Faltan datos');
    
    const countriesInDB = await Country.findAll({
        where: { id: countries }
    });

    if (!countriesInDB || countriesInDB.length === 0) {
        throw new Error('No se encontraron los países');
    }

    const activity = await Activity.create({
        name,
        difficulty,
        duration: duration ? duration : null,
        season
    });

    await activity.addCountries(countriesInDB);

    return activity;

};


module.exports = addActivityInDB;