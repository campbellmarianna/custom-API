const express = require('express')
const app = express()
const hbs = require("express-handlebars");

// Set the view engine and file extension
app.engine("hbs", hbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");

// ADD CONTROLLERS
require('./controllers/readmes.js')(app);





app.listen(3000, () => {
  console.log('App listening on port 3000!')
})

module.exports = app;
