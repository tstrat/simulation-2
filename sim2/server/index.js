const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const houseController = require('./house_controller.js');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
.then(database => {
    app.set('db', database);
}).catch(error => console.log('error connecting to database', error));

app.get('/api/houses', houseController.getHouses);
// add house and 
app.post('/api/houses', houseController.addHouse);
// remove house
app.delete('/api/houses/:id', houseController.removeHouse);

const SERVER_PORT = process.env.SERVER_PORT || 3000;
app.listen(SERVER_PORT, () => console.log('Listening on port:', SERVER_PORT));