const StaffRecord = require("../models/staffRecord_Model");

const addStaffRecord = (req, res) => {
  var data = req.body;
  console.log(data.firstname);
  var newStaffRecord = new StaffRecord({
      firstname: data.firstname,
      lastname: data.lastname,
      address: data.address,
      birthday: data.dob,
      maritialStat: data.mStatus,
      cellphone: data.cellphone,
      email: data.email,
      title: data.jobtitle,
      employeeId: data.empId,
      startDate: data.startdate,
      deparment: data.department,
      workLoc: data.workloc,
      salary: data.salary,
      supervisor: data.supervisor,
      efirstname: data.efirstname,
      elastname: data.elastname,
      eaddress: data.eadddress,
      ecellphone: data.ecellphone,
      Relationship: data.rela
  });
  newStaffRecord
    .save()
    .then((newStaffRecord) => {
      res
        .status(200)
        .json({
          message: "Record add successfully.",
          redirect: "/staffRecord",
        });
    })
    .catch((error) => {
      res.status(200).json({ message: "Error occur." });
    });
};
const getAllRecords = (req, res) => {
  StaffRecord.find({}).then((records) => {
    res.send(records);
  });
};
const getRecord = (req, res) => {
  var recId = req.params.id;
  StaffRecord.findById(recId).then((records) => {
    res.send(records);
  });
};
const editRecord = (req, res) => {
  var data = req.body;
  var recId = data.recId;
  var updatedRecord = {
    firstname: data.firstname,
    lastname: data.lastname,
    address: data.address,
    birthday: data.birthday,
    maritialStat: data.maritialStat,
    cellphone: data.cellphone,
    email: data.email,
    title: data.title,
    employeeId: data.employeeId,
    startDate: data.startDate,
    deparment: data.department,
    workLoc: data.workloc,
    salary: data.salary,
    supervisor: data.supervisor,
    efirstname: data.efirstname,
    elastname: data.elastname,
    eaddress: data.eaddress,
    ecellphone: data.ecellphone,
    Relationship: data.Relationship
  };
  StaffRecord.findByIdAndUpdate(recId, updatedRecord)
    .then((newRecord) => {
      if(newRecord == null){
        res.status(200).json({ message: "No staff record found!!" });
      } else{
        res.status(200).json({ message: "Staff Details Updated Successfully!!" });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteRecord = (req, res) => {
  var recid = req.params.id;
  StaffRecord.findByIdAndDelete(recid).then((record) => {
    if (record == null) {
      res.status(200).send("No record is deleted");
    } else {
      res.status(200).send("Record has been deleted successfully");
    }
  });
};
module.exports = {
  addStaffRecord,
  getAllRecords,
  editRecord,
  deleteRecord,
  getRecord,
};
