const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const houseController = require('./controllers/house_controller');
const loginController = require('./controllers/login_controller');
const session = require('express-session');
const checkLogin = require('./middleware/checkLogin');
const checkSession = require('./middleware/checkSession');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(session({
    secret : process.env.SESSION_SECRET,
    resave : false,
    saveUninitialized : true
}));
app.use(checkSession);


// MASSIVE DB CONNECTION
massive(process.env.CONNECTION_STRING)
.then(database => {
    app.set('db', database);
}).catch(error => console.log('error connecting to database', error));


// CONTENT ENDPOINTS
app.get('/api/houses', checkLogin, houseController.getHouses);
app.post('/api/houses', checkLogin, houseController.addHouse);
app.delete('/api/houses/:id', checkLogin, houseController.removeHouse);


// LOGIN ENDPOINTS
app.post('/api/register', loginController.register);
app.post('/api/login/', loginController.login);
app.get('/api/user', loginController.getUser);
app.get('/api/signout', loginController.signOut);



const SERVER_PORT = process.env.SERVER_PORT || 3000;
app.listen(SERVER_PORT, () => console.log('Listening on port:', SERVER_PORT));