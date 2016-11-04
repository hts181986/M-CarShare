var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/index.html', function(req, res, next) {
    res.render('index');
});

router.get('/login.html', function(req, res, next) {

    res.render('login', {
        message: undefined
    });
});

router.get('/cars.html', function(req, res, next) {
    res.render('cars');
});

router.get('/user.html', function(req, res, next) {
    res.render('User');
});

module.exports = router;