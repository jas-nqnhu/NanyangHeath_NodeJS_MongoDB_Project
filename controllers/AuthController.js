const User = require("../models/user_Model");
const bcrypt = require("bcrypt");
var crypto = require("crypto");
const UserController = require("./UserController");

 // REGISTER
const register = (req, res, next) => {
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
      role: "User",
    });
    User.findOne({ email: data.email }).then((User) => {
      if (User) {
        console.log("Email is already in use!!");
        res.status(401).send("Email is already in use!");
      } else { 
        user
          .save()
          .then((user) => {
            console.log("User Added Successfully!!");
            res.status(200).json({ message: "User Added Successfully Please Proceed to Login"});
          })
          .catch((error) => {
            console.log("An Error has Occured!!");
            res.status(500).json({ message: "An Error has Occured!!"});
          });
      }
    });
  });
}; 



//LOGIN
const login = (req, res, next) => {
  var data = req.body;
  var email = data.email;
  console.log(data.email);
  var password = data.password;
  User.findOne({ email: data.email }).then((User) => {
    if (User) {
      bcrypt.compare(password, User.password, function (err, result) {
        if (err) {
          return err;
        }
        if (result) {
          var strToHash = User.email + Date.now();
          var token = crypto.createHash("md5").update(strToHash).digest("hex");
          console.log("Login Successful");
          UserController.updateToken(User._id, token, function (err, user) {
            res.status(200).json({ message: "Login successful.", token: token, name: User.name, role: User.role, _id: User._id, redirect : "/" });
          });
        } else {
          console.log("Password does not matched!");
          res.status(401).send("Invalid username or password");
        }
      });
    } else {
      console.log("No user found!");
      res.status(404).send( "Invalid username or password");
    }
  });
};

//LOGOUT
const logOut = (req, res) => {
  var token = req.query.token;
  if (token == undefined) {
      res.status(401).send("No tokens are provided");
  } else {
      UserController.checkToken(token, function (err, user) {
          if (err || user == null) {
              res.status(401).send("Invalid token provided");
          } else {
            UserController.removeToken(user._id, function (err, user) {
                          res.status(200).send("Logout successfully")
                      });
          }
      })
  }
};
module.exports = {
  register,
  login,
  logOut
}; //Log Out
