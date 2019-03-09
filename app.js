require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override')
const hbs = require("express-handlebars");

// INITIALIZE BODY-PARSER
const bodyParser = require('body-parser');

// IMPORT Express Validator
const expressValidator = require('express-validator');

// Set db
require('./data/deploy-docs-db');

var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express();

// Set the view engine and file extension
app.engine("hbs", hbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// override with POST having ?_method=DELETE or ?_method=PUT
app.use(methodOverride('_method'))

// Add after body parser initialization!
app.use(expressValidator());

app.use(cookieParser()); // Add this after you initialize express.

// ADD CUSTOM MIDDLEWARE
var checkAuth = (req, res, next) => {
  console.log("Checking authentication");
  if (typeof req.cookies.nToken === "undefined" || req.cookies.nToken === null) {
    req.user = null;
  } else {
    var token = req.cookies.nToken;
    var decodedToken = jwt.decode(token, { complete: true }) || {};
    req.user = decodedToken.payload;
  }

  next();
};

app.use(checkAuth);
app.use(express.static('public'));

// Import Model
const Readme = require('./models/readme.js');


// ADD CONTROLLERS
require('./controllers/readmes.js')(app);
require('./controllers/auth.js')(app);


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('App listening!')
});

module.exports = app;
