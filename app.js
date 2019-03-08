const express = require('express')
const app = express()
const hbs = require("express-handlebars");

// Set the view engine and file extension
app.engine("hbs", hbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/deploy-docs', { useNewUrlParser: true });

const Readme = mongoose.model('README', {
  URL: String,
  description: String,
  publications: String,
  createdAt: String
});

// ADD CONTROLLERS
require('./controllers/readmes.js')(app);

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})

module.exports = app;
