const ART = require("../models/ART_Model");
const { ObjectId } = require('mongodb');
const addART = (req, res) => {
    var data = req.body;
    var newART = new ART({
        dateTaken: data.dateTaken,
        imgPath: req.file.path,
        result: data.result,
        user: ObjectId(data.uName)
    });
    newART
      .save()
      .then((newART) => {
        res.status(200).redirect("/?msg=\"Result Uploaded Successfully\"");
      })
      .catch((error) => {
        res.status(200).json({ message: 'error'});
      });
  };

  const getAllART = (req, res) => {
    ART.find({})
      .populate({ path: 'user', select: 'name'})
      .then((records) => {
        res.send(records);
      });
  };
  const getARTbyId = (req, res) => {
    var recId = req.params.id;
    ART.findById(recId).populate({ path: 'user', select: 'name'}).then((records) => {
      res.send(records);
    });
  };
  module.exports = {
    addART,
    getAllART,
    getARTbyId
  };