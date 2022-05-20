const moongose = require("mongoose");
const Schema = moongose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    token: {
      type: String,
    },
    role: {
      type: String,
    }
  },
  { timestamps: true }
);

const User = moongose.model("User", userSchema);
module.exports = User;
