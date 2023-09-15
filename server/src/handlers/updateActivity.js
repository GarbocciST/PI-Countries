const updateInDB = require('../controllers/updateInDB.js');

const updateActivity = async (req, res) => {
    const { id } = req.params;
    const { name, difficulty, duration, season, countries } = req.body;
    try {
        const activity = await updateInDB(id, name, difficulty, duration, season, countries);
        res.status(200).json(activity);

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = updateActivity;