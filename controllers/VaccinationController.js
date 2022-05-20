const Vaccination = require("../models/Vaccination_Model.js");

const addStatus = (req, res) => {
    var data = req.body;
    var symptoms = [];
    symptoms.push(data.symptoms);
    var newStatus = new Vaccination({
        first_name: data.first_name,
        last_name: data.last_name,
        nric: data.nric,
        dob: data.dob,
        email: data.email,
        travelhistory: data.travelhistory,
        symptoms: symptoms,
        vacstatus: data.vacstatus,
        declaration: data.declaration,
    });
    newStatus
        .save()
        .then((newStatus) => {
            res.redirect("/vaccinationStatus");
        })
        .catch((error) => {
            res.redirect("back");
            console.log(error);
        });
};
const getAllStatus = (req, res) => {
    Vaccination.find({}).then((vaccinations) => {
      res.send(vaccinations);
    });
  };
  const getStatus = (req, res) => {
    var statusId = req.params.id;
    Vaccination.findById(statusId).then((vaccinations) => {
      res.send(vaccinations);
    });
  };

  const editStatus = (req, res) => {
    var data = req.body;
    var statusId = data.statusId;
    var updatedStatus = {
        first_name: data.first_name,
        last_name: data.last_name,
        nric: data.nric,
        dob: data.dob,
        email: data.email,
        travelhistory: data.travelhistory,
        symptoms: data.symptoms,
        vacstatus: data.vacstatus,
        declaration: data.declaration,
    };
    Vaccination.findByIdAndUpdate(statusId, updatedStatus)
      .then((newStatus) => {
        res.status(200).json({ message: "Status Updated Successfully"});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteStatus = (req, res) => {
    var statusId = req.params.id;
    Vaccination.findByIdAndDelete(statusId).then((vaccination) => {
      res.end();
    });
  };
module.exports = {
    addStatus,getAllStatus,getStatus,editStatus,deleteStatus
};