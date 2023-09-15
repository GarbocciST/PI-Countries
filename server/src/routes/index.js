const { Router } = require("express");
const getCountries = require("../handlers/getCountries");
const getCountryById = require("../handlers/getCountryById");
const getCountryByName = require("../handlers/getCountryByName");
const createActivity = require("../handlers/createActivity");
const getActivities = require("../handlers/getActivities");
const deleteActivity = require("../handlers/deleteActivity");
const updateActivity = require("../handlers/updateActivity");

const router = Router();


router.get('/countries', getCountries);

router.get('/countries/name', getCountryByName);

router.get('/countries/:id', getCountryById);  
  
router.post('/activities', createActivity);
  
router.get('/activities', getActivities);

router.put('/activities/:id', updateActivity);

router.delete('/activities/:id', deleteActivity);

  

module.exports = router;
