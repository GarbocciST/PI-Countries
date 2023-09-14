// POST | /activities
// Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados.
// Toda la información debe ser recibida por body.
// Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno).

const { Activity, Country } = require('../db.js');

const addActivityInDB = async( name, difficulty, duration, season, countries ) => {

    if(!name || !difficulty || !season || !countries) throw new Error('Faltan datos');
    
    const countriesInDB = await Country.findByPk(countries);

    console.log(countriesInDB);

    if(!countriesInDB) throw new Error('No se encontraron los paises');

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