const deleteInDB = require('../controllers/deleteInDB.js');

const deleteActivity = async (req, res) => {
    const { id } = req.params;
    try {
        const activity = await deleteInDB(id);
        res.status(200).json(activity);

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = deleteActivity;