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
app.get('/readmes/index', (req, res) => {
    Readme.find({})
      .then(readmes => {
        res.render("readmes-index", { readmes });
      })
      .catch(err => {
        console.log(err.message);
      });
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

// SHOW
app.get("/readmes/:id", function(req, res) {
  // LOOK UP THE README
  Readme.findById(req.params.id)
    .then(readme => {
      res.render("readmes-show", { readme });
    })
    .catch(err => {
      console.log(err.message);
    });
});

// DELETE
app.delete('/readmes/:id', function (req,res) {
    Readme.findByIdAndRemove(req.params.id).then((readme) => {
        res.redirect('/readmes/index');
    }).catch((err) => {
        console.log(err.message);
    });
});


// EDIT
app.get('/readmes/:id/edit', (req, res) => {
  Readme.findById(req.params.id, function(err, readme) {
    res.render('readmes-edit', {readme: readme});
  })
})

// ADD CONTROLLERS
// require('./controllers/readmes.js')(app);

app.listen(3000, () => {
  console.log('App listening on port 3000!')
});

module.exports = app;
