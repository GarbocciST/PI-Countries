const { getInDBByName } = require('../controllers/getInDB.js');
// GET | /countries/name?="..."
// Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
// Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// Si no existe el país, debe mostrar un mensaje adecuado.

const getCountryByName = async (req, res) => {
    
    const { name } = req.query;

    try {
        const country = await getInDBByName(name);
        res.status(200).json(country);
    } catch (error) {
        res.status(500).json({error: error.message})   
    }
}

module.exports = getCountryByName;