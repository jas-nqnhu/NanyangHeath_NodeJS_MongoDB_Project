const mongoose = require("mongoose");
var database = {
  connect: function () {
    mongoose.connect("mongodb://localhost:27017/wadProjectDB", function (err) {
      if (err == null) {
        console.log("Connected to Mongo DB");
        
      } else {
        console.log("Error connecting to Mongo DB");
      }
    });
  }, 
};
module.exports = database;