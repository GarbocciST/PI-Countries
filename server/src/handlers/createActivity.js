const addActivityInDB = require('../controllers/addInDB.js');


const createActivity = async (req, res) => {
    const { name, difficulty, duration, season, countries } = req.body;
    console.log(name, difficulty, duration, season, countries);

    try {
        const activity = await addActivityInDB(name, difficulty, duration, season, countries);
        res.status(200).json(activity);

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

module.exports = createActivity;