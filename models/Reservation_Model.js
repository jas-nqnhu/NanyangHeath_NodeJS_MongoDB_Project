const moongose = require("mongoose");
const Schema = moongose.Schema;

const resSchema = new Schema({
    name: {
        type: String
      },
      email: {
        type: String
      },
      phone:{
          type:Number,
      },
      date: {
        type: String
      },
      book_time:{
          type: String
      },
      person:{
        type:String,
      },
    }
);

const Reservation = moongose.model("reservation", resSchema);
module.exports = Reservation;