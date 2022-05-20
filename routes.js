const express = require("express");
const multer = require("multer");
const AuthController = require("./controllers/AuthController");
const UserController = require("./controllers/UserController");
const RecordController = require("./controllers/RecordController");
const AppointmentController = require("./controllers/AppointmentController");
const ARTController = require("./controllers/ARTController");
const VaccinationController = require("./controllers/VaccinationController");
const ReservationController = require("./controllers/ReservationController");
const PurchaseController = require("./controllers/PurchaseController");
const StaffRecordController = require("./controllers/StaffRecordController");
const db = require("./services/dataservice.js");
const ART = require("./models/ART_Model");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname + file.originalname);
  },
});
const upload = multer({ storage: storage });

db.connect();

var router = require("express").Router();

router.use(
  express.urlencoded({
    extended: true,
  })
);


/*-----------------------------------Authenticate User-----------------------------------------*/
router.use(function (req, res, next) {
  //Middleware code, executed on every HTTP request
  //if it is api request, then check for valid token
  //get token from query. if not defined, means no token
  if (req.url.includes("/api")) {
    //first time use req.query
    var token = req.query.token;
    if (token == undefined) {
      res.status(401).send("No tokens are provided");
    } else {
      UserController.checkToken(token, function (err, user) {
        if (err || user == null) {
          res.status(401).send("Invalid token provided");
        } else {
          //using next() means to proceed on with the HTTP request processing
          next();
        }
      });
    }
  } else if (
    (req.method == "PUT" && req.url.includes("/treatmentRecord")) ||
    (req.method == "DELETE" && req.url.includes("/treatmentRecord")) ||
    (req.method == "POST" && req.url.includes("/treatmentRecord"))
  ) {
    var token = req.query.token;
    if (token == undefined) {
      res.status(401).send("You have not sign in. Please sign in to continue");
    } else {
      UserController.checkToken(token, function (err, user) {
        if (err || user == null) {
          res
            .status(401)
            .send(
              "[Invalid token] You are not allowed to perform this action."
            );
        } else if ((user.role != "Admin")&&(user.role != "Staff")) {
          res
            .status(403)
            .send("You are forbidden to do this please contact admin!!");
        } else {
          //means proceed on with the request.
          next();
        }
      });
    }
  } else if (
    (req.method == "POST" && req.url.includes("/ART"))
  ) {
    var token = req.query.token;
    if (token == undefined) {
      res.status(401).send("You have not sign in. Please sign in to continue");
    } else {
      UserController.checkToken(token, function (err, user) {
        if (err || user == null) {
          res
            .status(401)
            .send(
              "[Invalid token] You are not allowed to perform this action."
            );
        } else if (user.role != "User") {
          res
            .status(403)
            .send("You are forbidden to do this please contact admin!!");
        } else {
          //means proceed on with the request.
          next();
        }
      });
    }
  } else if((req.method == "PUT"&& req.url.includes("/staffRecord")) ||
  (req.method == "DELETE" && req.url.includes("/staffRecord")) ||
  (req.method == "POST" && req.url.includes("/staffRecord"))){
    var token = req.query.token;
    if (token == undefined) {
      res.status(401).send("You have not sign in. Please sign in to continue");
    } else {
      UserController.checkToken(token, function (err, user) {
        if (err || user == null) {
          res
            .status(401)
            .send(
              "[Invalid token] You are not allowed to perform this action."
            );
        } else if (user.role != "Admin") {
          res
            .status(403)
            .send("You are forbidden to do this please contact admin!!");
        } else {
          //means proceed on with the request.
          next();
        }
      });
    }
  }
   else {
    //means any other url, no need to check for auth
    //means proceed on with the request.
    next();
  }
});




/*-----------------------------------Get Index page and home page-----------------------------------------*/

router.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

router.get("/home", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

router.get("/home/:id", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});
/*-----------------------------------Manage User-----------------------------------------*/

router.get("/manageUserRoles", function (req, res) {
  res.sendFile(__dirname + "/views/manageUserRoles.html");
});
router.get("/addUser", function (req, res) {
  res.sendFile(__dirname + "/views/addUser.html");
});
router.get("/viewUser", function (req, res) {
  res.sendFile(__dirname + "/views/viewUser.html");
});
router.get("/editUserRole", function (req, res) {
  res.sendFile(__dirname + "/views/editUserRole.html");
});
router.post("/addUser", UserController.addUser);
router.get("/viewUsers", UserController.getAllUser);
router.get("/user/:id", UserController.getUserByID);
router.put("/editUserRole/", UserController.UpdateUser);



// router.get("user/:id", function (req, res) {
//   var id = req.params.id;
//   UserController.getUserByID(id, function (err, user) {
//     res.send(user);
//   });
// });
// router.put("/editUserRole/", function (req, res) {
//   var data = req.body;
//   UserController.UpdateUser(
//     data.id,
//     data.name,
//     data.email,
//     data.password,
//     data.role,
//     function (err, user) {
//       if (err) {
//         console.log(err);
//       } else {
//         res.end();
//       }
//     }
//   );
// });


router.delete("/deleteUserRole/:id", UserController.deleteUser);




/*-----------------------------------Initiate CSS, JS and Assets-----------------------------------------*/
router.get("/css/*", function (req, res) {
  res.sendFile(__dirname + "/views/" + req.originalUrl);
});
router.get("/uploads/*", function (req, res) {
  res.sendFile(__dirname  + req.originalUrl);
});
router.get("/images/*", function (req, res) {
  res.sendFile(__dirname + "/assets/" + req.originalUrl);
});

router.get("/icons/*", function (req, res) {
  res.sendFile(__dirname + "/assets/" + req.originalUrl);
});

router.get("/fonts/*", function (req, res) {
  res.sendFile(__dirname + "/assets/" + req.originalUrl);
});

router.get("/js/*", function (req, res) {
  res.sendFile(__dirname + "/views/" + req.originalUrl);
});




/*-----------------------------------Login, Signup, Logout-----------------------------------------*/

router.get("/loginSignup", function (req, res) {
  res.sendFile(__dirname + "/views/login.html");
});

router.post("/register", AuthController.register);

router.post("/login", AuthController.login);

router.get("/logOut", AuthController.logOut);

/*-----------------------------------Appointments-----------------------------------------*/

router.get("/appointment", function (req, res) {
  res.sendFile(__dirname + "/views/appointment.html");
});

router.get("/appointments", AppointmentController.getAllAppointments);

router.post("/addAppointment", AppointmentController.addAppointment);

router.delete("/deleteAppointment/:id", AppointmentController.deleteAppointment);

router.get("/addBooking", function (req, res) {
  res.sendFile(__dirname + "/views/addAppointment.html");
});

router.get("/viewBooking", function (req, res) {
  res.sendFile(__dirname + "/views/viewAppointment.html");
});



router.get("/appointment/:id", function (req, res) {
  var id = req.params.id;
  AppointmentController.getAppointment(id, function (err, appointment) {
    console.log(appointment.toString());
    res.send(appointment);
  });
});
router.get("/editBooking", function (req, res) {
  res.sendFile(__dirname + "/views/editAppointment.html");
});
router.put("/editBooking/", function (req, res) {
  var data = req.body;
  AppointmentController.UpdateAppointments(
    data.id,
    data.MedicalConditionSymptoms,
    data.first_name,
    data.last_name,
    data.nric,
    data.dob,
    data.email,
    function (err, appointment) {
      if (err) {
        console.log(err);
      } else {
        res.end();
      }
    }
  );
});



/*-----------------------------------Restaurant-----------------------------------------*/
router.get("/store", function (req, res) {
  res.sendFile(__dirname + "/views/restaurant.html");
});

router.get("/menu", function (req, res) {
  res.sendFile(__dirname + "/views/menu.html");
});
router.get("/pharmacy", function (req, res) {
  res.sendFile(__dirname + "/views/pharmacy.html");
});
router.get("/purchaseMedicines", function (req, res) {
  res.sendFile(__dirname + "/views/purchasemedicine.html");
});
router.get("/reservation", function (req, res) {
  res.sendFile(__dirname + "/views/reservation.html");
});
router.post("/reservations", ReservationController.addReservation);
router.post("/purchasemedicines", PurchaseController.addPurchase);


/*-----------------------------------Vaccination Status-----------------------------------------*/

router.get("/vaccinationStatus/", function (req, res) {
  res.sendFile(__dirname + "/views/vaccinationStatus.html");
});
router.get("/addStatus/", function (req, res) {
  res.sendFile(__dirname + "/views/addVaccinationStatus.html");
});

router.get("/viewStatus/", function (req, res) {
  res.sendFile(__dirname + "/views/viewVaccinationStatus.html");
});

router.get("/editStatus/", function (req, res) {
  res.sendFile(__dirname + "/views/editVaccinationStatus.html");
});

router.get("/status", VaccinationController.getAllStatus);
router.post("/addStatus", VaccinationController.addStatus);
router.get("/status/:id", VaccinationController.getStatus);
router.put("/editStatus/", VaccinationController.editStatus);
router.delete("/deleteStatus/:id", VaccinationController.deleteStatus);





/*-----------------------------------Treatment Record-----------------------------------------*/

router.get("/treatmentRecord", function (req, res) {
  res.sendFile(__dirname + "/views/viewRecord.html");
});
router.delete("/treatmentRecord/deleteRecord/:id", RecordController.deleteRecord);
router.get("/treatmentRecord/addRecord", function (req, res) {
  res.sendFile(__dirname + "/views/addRecord.html");
});
router.get("/treatmentRecord/editRecord", function (req, res) {
  res.sendFile(__dirname + "/views/editRecord.html");
});

router.post("/treatmentRecord/addRecord", RecordController.addRecord);
router.get("/api/records", RecordController.getAllRecords);

router.get("/api/record/:id", RecordController.getRecord);

router.put("/treatmentRecord/editRecord", RecordController.editRecord);
/*-----------------------------------View Covid News-----------------------------------------*/
router.get("/covidNews", function (req, res) {
  res.sendFile(__dirname + "/views/covidNews.html");
});

/*-----------------------------------View Covid Data-----------------------------------------*/
router.get("/viewData", function (req, res) {
  res.sendFile(__dirname + "/views/covidData.html");
});



/*-----------------------------------Users -----------------------------------------*/
router.get("/api/users", UserController.getAllUser);
router.get("api/user/:id", function (req, res) {
  var id = req.params.id;
  UserController.getUserByID(id, function (err, user) {
    res.send(user);
  });
});
/*-----------------------------------ART -----------------------------------------*/

router.get("/ART", function (req, res) {
  res.sendFile(__dirname + "/views/ART.html");
});
router.get("/ART/viewART", function (req, res) {
  res.sendFile(__dirname + "/views/viewART.html");
});
router.post("/ART", upload.single("imgPath"), ARTController.addART);
router.get("/api/arts", ARTController.getAllART);
router.get("/api/arts/:id", ARTController.getARTbyId);
/*-----------------------------------Staff Record -----------------------------------------*/

router.get("/staffRecord", function (req, res) {
  res.sendFile(__dirname + "/views/viewStaffRecord.html");
});
router.get("/staffRecord/addStaffRecord", function (req, res) {
  res.sendFile(__dirname + "/views/addStaffRecord.html");
});
router.get("/staffRecord/editStaffRecord", function (req, res) {
  res.sendFile(__dirname + "/views/editStaffRecord.html");
});

router.post("/staffRecord/addStaffRecord", StaffRecordController.addStaffRecord);
router.get("/api/staffRecords", StaffRecordController.getAllRecords);
router.get("/api/staffRecords/:id", StaffRecordController.getRecord);
router.delete("/staffRecords/deleteStaffRecord/:id", StaffRecordController.deleteRecord);
router.put("/staffRecords/editStaffRecord", StaffRecordController.editRecord);
module.exports = router;
