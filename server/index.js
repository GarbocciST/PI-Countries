const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const { PORT } = process.env;
const fillDB = require('./src/utils/utils.js');

conn.sync({ alter: true }).then(() => {
server.listen(PORT,async() => {
  console.log(`Server listening on port ${PORT}`);
  await fillDB();
})
}).catch(error => console.error(error))
