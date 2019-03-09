/* Mongoose Connection */
const mongoose = require("mongoose");
assert = require("assert");

// const url = "mongodb://localhost/deploy-docs-db";
// mongoose.Promise = global.Promise;
// mongoose.connect(
  // url,
  // { useNewUrlParser: true },
  // function(err, db) {
  //   assert.equal(null, err);
  //   console.log("Connected successfully to database");

    // db.close(); turn on for testing
  // }
// );

// connect Mongoose to your DB
// var mongoose = require(‘mongoose’);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/deploy-docs-db');

mongoose.connection.on("error", console.error.bind(console, "MongoDB connection Error:"));
mongoose.set("debug", true);

module.exports = mongoose.connection;
