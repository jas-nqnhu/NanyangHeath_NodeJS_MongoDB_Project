var express= require('express');
var app = express();
var port = 3000;

var routes = require('./routes.js');
app.use('/',routes);

//Set Routes for Admin
var adminRoute = require('./admin_routes.js')
app.use('/admin', adminRoute);

app.listen(port,function() {
    console.log('Server started on port '+port); 
 });