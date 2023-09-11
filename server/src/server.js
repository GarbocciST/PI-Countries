const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);

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

module.exports = server;
