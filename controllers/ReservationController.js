const Reservation = require("../models/Reservation_Model.js");
const addReservation = (req, res) => {
    var data = req.body;
    var newReservation = new Reservation({
        name: data.name,
        email: data.email,
        phone: data.phone,
        date:data.date,
        book_time:data.book_time,
        person:data.person
    });
    newReservation
      .save()
      .then((newReservation) => {
        res.status(200).redirect('/store');
      })
      .catch((error) => {
        res.status(400).json({ message: 'Reservation Failed'});
      });
  };

  module.exports = {
    addReservation,
  };