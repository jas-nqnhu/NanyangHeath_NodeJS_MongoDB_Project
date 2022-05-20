const moongose = require("mongoose");
const Schema = moongose.Schema;

const srSchema = new Schema(
  {
      firstname: {
        type: String,
      },
      lastname: {
        type: String,
      },
      address: {
        type: String,
      },
      birthday: {
        type: String,
      },
      maritialStat: {
        type: String,
      },
      cellphone: {
        type: Number,
      },
      email: {
        type: String,
      },
      title: {
        type: String,
      },
      employeeId: {
        type: String,
      },
      startDate: {
        type: String,
      },
      deparment: {
        type: String,
      },
      workLoc: {
        type: String,
      },
      salary: {
        type: Number,
      },
      supervisor: {
        type: String,
      },
      efirstname: {
        type: String,
      },
      elastname: {
        type: String,
      },
      eaddress: {
        type: String,
      },
      ecellphone: {
        type: Number,
      },
      Relationship: {
        type: String,
      },
  },
  { timestamps: true }
);

const StaffRecord = moongose.model("staffRecord", srSchema);
module.exports = StaffRecord;
