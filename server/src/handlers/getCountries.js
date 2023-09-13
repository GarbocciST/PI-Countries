const { getInDB } = require('../controllers/getInDB.js');

const getCountries = async(req, res) => {
    try {   
        const countries = await getInDB();
        res.status(200).json(countries);

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getCountries;