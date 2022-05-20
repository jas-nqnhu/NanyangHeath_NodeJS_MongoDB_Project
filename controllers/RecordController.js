const Record = require("../models/treatmentRecord_Model");
const { ObjectId } = require("mongodb");

const addRecord = (req, res) => {
  var data = req.body;
  var newRecord = new Record({
    patientName: data.patientName,
    patientPhone: data.patientPhone,
    address: data.address,
    birthday: data.birthday,
    height: data.height,
    weight: data.weight,
    bloodtype: data.bloodtype,
    medicalHistory: data.medicalHistory,
    otherHealthIssue: data.otherHealthIssue,
    user: ObjectId(data.ptId),
    nurse: ObjectId(data.staffId),
  });
  newRecord
    .save()
    .then((newRecord) => {
      res
        .status(200)
        .json({
          message: "Record add successfully.",
          redirect: "/treatmentRecord",
        });
    })
    .catch((error) => {
      res.status(200).json({ message: "Error occur." });
    });
};
const getAllRecords = (req, res) => {
  Record.find({})
    .populate("nurse")
    .then((records) => {
      res.send(records);
    });
};
const getRecord = (req, res) => {
  var recId = req.params.id;
  Record.findById(recId).then((records) => {
    res.send(records);
  });
};
const editRecord = (req, res) => {
  var data = req.body;
  var recId = data.recId;
  var updatedRecord = {
    patientName: data.patientName,
    patientPhone: data.patientPhone,
    address: data.address,
    birthday: data.birthday,
    height: data.height,
    weight: data.weight,
    bloodtype: data.bloodtype,
    medicalHistory: data.medicalHistory,
    otherHealthIssue: data.otherHealthIssue,
  };
  Record.findByIdAndUpdate(recId, updatedRecord)
    .then((newRecord) => {
      if(newRecord==null){
        res.status(200).json({ message: "No Record Updated!!" });
      } else {
        res.status(200).json({ message: "User Details Updated Successfully!!" });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteRecord = (req, res) => {
  var recid = req.params.id;
  Record.findByIdAndDelete(recid).then((record) => {
    if (record == null) {
      res.status(200).send("No record is deleted");
    } else {
      res.status(200).send("Record has been deleted successfully");
    }
  })
  .catch((error) => {
    console.log(error);
  });
};
module.exports = {
  addRecord,
  getAllRecords,
  editRecord,
  deleteRecord,
  getRecord,
};
