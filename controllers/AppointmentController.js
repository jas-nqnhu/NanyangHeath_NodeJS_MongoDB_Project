const Appointment = require("../models/Appointment_Model");

const addAppointment = (req,res, next ) => {
    var data = req.body;
    var newAppointment = new Appointment({
      MedicalConditionSymptoms: data.MedicalConditionSymptoms,
      first_name: data.first_name,
      last_name: data.last_name,
      nric: data.nric,
      dob: data.dob,
      email: data.email,
      });
      newAppointment.save()
      .then((newAppointment) => {
        res.redirect("/appointment");
      })
      .catch((error) => {
        res.redirect("back?id=1");
        console.log(error);
      });
};
const getAllAppointments = (req,res) => {
    Appointment.find({}).then((appointments) =>{
        res.send(appointments);
    });
  };
const getAppointment = (id,callback)=>{
  Appointment.findById(id,callback);
}

const UpdateAppointments = (id,m, f,l, n, d, e,callback)=> {
  var updatedAppointment = {
    MedicalConditionSymptoms: m,
    first_name: f,
    last_name: l,
    nric: n,
    dob: d,
    email: e,
      }
      Appointment.findByIdAndUpdate(id, updatedAppointment, callback);
  };  
  const deleteAppointment = (req, res) => {
    var bookingId = req.params.id;
    Appointment.findByIdAndDelete(bookingId).then((appointment) => {
      res.end();
    });
  };
module.exports = {
  addAppointment,
  getAllAppointments,
  getAppointment,
  UpdateAppointments,
  deleteAppointment
  }; 