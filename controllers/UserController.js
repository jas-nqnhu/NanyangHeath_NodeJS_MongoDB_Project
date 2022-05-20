const User = require("../models/user_Model");
const bcrypt = require("bcrypt");
var crypto = require("crypto");
const UserController = require("./UserController");
const { redirect } = require("express/lib/response");

const addUser = (req, res, next) => {
  var data = req.body;
  bcrypt.hash(data.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err,
      });
    }
    let user = new User({
      name: data.name,
      email: data.email,
      password: hashedPass,
      role: data.role,
    });
    User.findOne({ email: data.email }).then((User) => {
      if (User) {
        console.log("Email already used!!");
        res.status(401).send("Email already used!!");
      } else {
        user
          .save()
          .then((user) => {
            console.log("User Added Successfully!!");
            res.status(200).redirect('/viewUser');
            
          })
          .catch((error) => {
            console.log("An Error has Occured!!");
            res.status(500).json({ message: "An Error has Occured!!"});
          });
      }
    });
  });
}; 
const getUserByID = (id, callback) => {
  User.findById(id, callback);
};

const getAllUser = (req, res) => {
  User.find({}).then((users) => {
    res.send(users);
  });
};
const getUserByToken = (token, callback) => {
  User.findOne({token:token}, callback);
};

const UpdateUser = (id,name,email,hashedPassword,role,callback)=> {
  var updatedUser = {
    name: name,
    email: email,
    password: hashedPassword,
    role:role,
      }
      User.findByIdAndUpdate(id, updatedUser, callback);
  };  
  const deleteUser = (req, res) => {
    var userId = req.params.id;
    User.findByIdAndDelete(userId).then((user) => {
      if (user) {res.status(200).json({ message: "Delete Was Successful"});}else{res.status(404).json({ message: "Delete Was not unsuccessful"});}
      
    });
  };

const updateToken = (id, token, callback) => {
  User.findByIdAndUpdate(id, { token: token }, callback);
};

const checkToken = (token,callback)=> {
  User.findOne({token:token},callback);
};
const removeToken =  (id,callback)=> {
  User.findByIdAndUpdate(id, {$unset: {token: 1}},callback);
};
module.exports = {
  addUser,
  UpdateUser,
  deleteUser,
   getUserByID,
   updateToken,
   checkToken,
   removeToken,
   getUserByToken,
   getAllUser
  }; //Log Out