const moongose = require("mongoose");
const Schema = moongose.Schema;

const purchaseSchema = new Schema({
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
      items: {
        type: Array,
      },
    }
);

const Purchase = moongose.model("purchase", purchaseSchema);
module.exports = Purchase;