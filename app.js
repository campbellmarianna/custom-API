require('dotenv').config();
const express = require('express')
const hbs = require("express-handlebars");

// INITIALIZE BODY-PARSER
const bodyParser = require('body-parser');

// IMPORT Express Validator
const expressValidator = require('express-validator');

// Set db
require('./data/deploy-docs-db')

var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express();

// Set the view engine and file extension
app.engine("hbs", hbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add after body parser initialization!
app.use(expressValidator());

app.use(cookieParser()); // Add this after you initialize express.


const Readme = require('./models/readme.js');


// ADD CONTROLLERS
require('./controllers/readmes.js')(app);
require('./controllers/auth.js')(app);

app.listen(3000, () => {
  console.log('App listening on port 3000!')
});

module.exports = app;
