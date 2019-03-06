const express = require('express')
const app = express()

// ADD CONTROLLERS
require('./controllers/readmes.js')(app);





app.listen(3000, () => {
  console.log('App listening on port 3000!')
})

module.exports = app;
