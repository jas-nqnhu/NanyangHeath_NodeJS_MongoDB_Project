const moongose = require("mongoose");
const Schema = moongose.Schema;

const vaccinationSchema = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  nric: {
    type: String
  },
  dob: {
    type: String
  },
  email: {
    type: String
  },
  travelhistory: {
    type: String,
  },
  symptoms: {
    type: Array,
  },
  vacstatus: {
    type: String,
  },
  declaration: {
    type: String
  }
},
{ timestamps: true },
);

const Vaccination = moongose.model("Vaccination", vaccinationSchema);
module.exports = Vaccination;
