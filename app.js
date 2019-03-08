const express = require('express')
const hbs = require("express-handlebars");

// INITIALIZE BODY-PARSER
const bodyParser = require('body-parser');

// IMPORT Express Validator
const expressValidator = require('express-validator');

// Set db
require('./data/deploy-docs-db')

const app = express();

// Set the view engine and file extension
app.engine("hbs", hbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add after body parser initialization!
app.use(expressValidator());

const Readme = require('./models/readme.js');

// INDEX
app.get('/readmes', (req, res) => {
    // res.render('readmes-index', { readmes: readmes});
    Readme.find()
        .then(readmes => {
            res.render('readmes-index', { readmes: readmes });
        })
        .catch(err => {
            console.log(err);
        })
});

// New
app.get('/readmes/new', (req, res) => {
  res.render('readmes-new');
})

// CREATE
app.post("/readmes/new", (req, res) => {
    console.log(req.body)
    // INSTANTIATE INSTANCE OF POST MODEL
   const readme = new Readme(req.body);

   // SAVE INSTANCE OF Readme MODEL TO DB
   readme.save((err, post) => {
     // REDIRECT TO THE ROOT
     return res.redirect(`/readmes`);
  });
});

// ADD CONTROLLERS
// require('./controllers/readmes.js')(app);

app.listen(3000, () => {
  console.log('App listening on port 3000!')
});

module.exports = app;
