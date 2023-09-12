const { Router } = require("express");

const router = Router();


server.get('/countries', (req, res) => {
    res.send('getCountries')
})
  
server.get('/countries/:id', (req, res) => {
    res.send('getCountryById')
})
  
server.get('/countries/name', (req, res) => {
    res.send('getCountryByName')
})
  
server.post('/actvities', (req, res) => {
    res.send('createActivity')
})
  
server.get('/actvities', (req, res) => {
    res.send('getActivities')
})
  

module.exports = router;
