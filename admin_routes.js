const express = require("express");
var router = require("express").Router();

//This / is point to /admin/{route}
router.get('/', function(req, res){
  res.send('Welcome Admin');
});
router.get('/test', function(req, res){
  res.send('Test Page');
});

router.get('/profile', function(req, res){
  res.send('Admin Profile Page');
});

module.exports = router;
