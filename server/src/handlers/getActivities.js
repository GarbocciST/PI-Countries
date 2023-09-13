const { getActivitiesInDB } = require('../controllers/getInDB.js');

const getActivities = async(req, res) => {
    try {
        const activities = await getActivitiesInDB();
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getActivities;

