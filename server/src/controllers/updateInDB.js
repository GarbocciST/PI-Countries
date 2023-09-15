const { Country, Activity } = require('../db.js');

const updateInDB = async (id, name, difficulty, duration, season, countries) => {
    if (!name || !difficulty || !season || !countries) throw new Error('Faltan datos');

    const activity = await Activity.findOne({
        where: { id },
        include: [Country] // Incluir países relacionados
    });

    if (!activity) throw new Error('No se encontró la actividad');

    // Actualizar las propiedades de la actividad
    activity.name = name;
    activity.difficulty = difficulty;
    activity.duration = duration;
    activity.season = season;

    // Establecer la relación con los países
    const countriesInDB = await Country.findAll({
        where: { id: countries }
    });

    if (!countriesInDB || countriesInDB.length === 0) throw new Error('No se encontraron los países');

    // Actualizar la relación de la actividad con los países
    await activity.setCountries(countriesInDB);

    // Guardar los cambios en la base de datos
    await activity.save();

    return activity;
};

module.exports = updateInDB;


// const updateInDB = async (id, name, difficulty, duration, season, countries) => {
    
//     if (!name || !difficulty || !season || !countries) throw new Error('Faltan datos');

//     const countriesInDB = await Country.findByPk(countries);

//     if (!countriesInDB) throw new Error('No se encontraron los paises');

//     //! Actualiza la actividad y obtén el objeto actualizado
//     const [, [updatedActivity]] = await Activity.update({
//         name,
//         difficulty,
//         duration,
//         season
//     }, {
//         returning: true, // Esto devuelve el objeto actualizado
//         where: { id }
//     });

//     if (!updatedActivity) throw new Error('No se encontró la actividad actualizada');

//     //! Establece la relación con los países
//     await updatedActivity.setCountries(countriesInDB);

//     return updatedActivity;
// };
