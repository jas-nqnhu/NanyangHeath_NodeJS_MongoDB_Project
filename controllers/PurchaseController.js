const Purchase = require("../models/Purchase_Model");
const addPurchase = (req, res) => {
    var data = req.body;
    var newPurchase = new Purchase({
        name: data.name,
        email: data.email,
        phone: data.phone,
        date:data.date,
        book_time:data.book_time,
        items:data.items
    });
    newPurchase
      .save()
      .then((newPurchase) => {
        res.status(200).redirect('/pharmacy');
      })
      .catch((error) => {
        res.status(400).json({ message: 'Purchase Failed'});
      });
  };

  module.exports = {
    addPurchase,
  };