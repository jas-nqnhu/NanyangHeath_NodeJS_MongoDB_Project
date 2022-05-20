const moongose = require("mongoose");
const Schema = moongose.Schema;

const trSchema = new Schema({
  patientName: {
    type: String,
  },
  patientPhone: {
    type: String,
  },
  address: {
    type: String,
  },
  birthday: {
    type: String,
  },
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  bloodtype: {
    type: String,
  },
  medicalHistory: {
    type: Array,
  },
  otherHealthIssue:{
    type: String
  },
  user:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  nurse:{
    type: Schema.Types.ObjectId,
    ref: 'staffRecord'
  }
},
{ timestamps: true });

const Record = moongose.model("treatmentrecord", trSchema);
module.exports = Record;
