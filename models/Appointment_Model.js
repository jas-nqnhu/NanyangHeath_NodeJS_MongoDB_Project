const moongose = require("mongoose");
const Schema = moongose.Schema;

const appointmentSchema = new Schema({
  MedicalConditionSymptoms: {
    type: String
  },
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
});

const Appointment = moongose.model("Appointment", appointmentSchema);
module.exports = Appointment;
