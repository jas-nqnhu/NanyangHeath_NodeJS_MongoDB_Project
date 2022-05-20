const moongose = require("mongoose");
const Schema = moongose.Schema;

const medicineItemSchema = new Schema({
    name: {
        type: String
      },
      price: {
        type: Number
      },
      imgName: {
        type: String
      }
});

const medicineItem = moongose.model("medicineItem", medicineItemSchema);
module.exports = medicineItem;