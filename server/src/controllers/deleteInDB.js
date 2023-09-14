const { Activity } = require('../db.js');

const deleteInDB = async(id) => {
    try {
        const activity = await Activity.destroy({
            where: { id }
        });
        return `Se eliminó la actividad con el id ${id}`;
    } catch (error) {
        throw new Error(`No se pudo eliminar la actividad con el id ${id}`);
    }
};

module.exports = deleteInDB;