var express = require('express');
var router = express.Router();
var isAuth = require("../library/isAuth");
var cars = require("./api/cars");
var location = require("./api/location");
var userType = require("./api/userType");

//Used for routes that must be authenticated.


//Register the authentication middleware
// router.use('/cars.html', isAuthenticated);
// router.use('/user.html', isAuthenticated);
router.use("/cars", isAuth);
router.use("/location", isAuth);
router.use("/usertypes", isAuth);
//api for all posts
router.use("/cars", cars);
router.use("/location", location);



module.exports = router;