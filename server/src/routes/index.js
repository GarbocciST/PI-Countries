const { Router } = require("express");
const getCountries = require("../handlers/getCountries");
const getCountryById = require("../handlers/getCountryById");
const getCountryByName = require("../handlers/getCountryByName");
const createActivity = require("../handlers/createActivity");
const getActivities = require("../handlers/getActivities");

const router = Router();


router.get('/countries', getCountries);

router.get('/countries/name', getCountryByName);

router.get('/countries/:id', getCountryById);  
  
router.post('/actvities', createActivity);
  
router.get('/actvities', getActivities);
  

module.exports = router;
