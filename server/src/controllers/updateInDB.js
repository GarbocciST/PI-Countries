const { Country, Activity } = require('../db.js');

const updateInDB = async (id, name, difficulty, duration, season, countries) => {
    if (!name || !difficulty || !season || !countries) throw new Error('Faltan datos');

    const activity = await Activity.findOne({
        where: { id },
        include: [Country]
    });

    if (!activity) throw new Error('No se encontró la actividad');

    activity.name = name;
    activity.difficulty = difficulty;
    activity.duration = duration;
    activity.season = season;

    const countriesInDB = await Country.findAll({
        where: { id: countries }
    });

    if (!countriesInDB || countriesInDB.length === 0) throw new Error('No se encontraron los países');

    await activity.setCountries(countriesInDB);

    await activity.save();

    return activity;
};

module.exports = updateInDB;

