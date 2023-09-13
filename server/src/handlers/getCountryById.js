const { getInDB } = require('../controllers/getInDB.js');

const getCountryById = async (req, res) => {
    const { id } = req.params;
    try {
        const country = await getInDB(id);
        res.status(200).json(country);

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getCountryById;