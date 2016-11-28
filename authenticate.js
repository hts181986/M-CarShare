var express = require('express');
var router = express.Router();

module.exports = function(passport) {

    //sends successful login state
    router.get('/success', function(req, res) {
        var data = {
            message: "Registerd successfully"
        };
        res.render("login", data);
        // res.send({ state: 'success', user: req.user ? req.user : null });
    });

    //sends failure login state back t
    router.get('/failure', function(req, res) {
        res.send({ state: 'failure', user: null, message: "Invalid username or password" });
    });

    router.get('/successLogin', function(req, res) {
        res.send({ state: 'success', user: req.user ? req.user : null });
    });

    router.get('/failureLogin', function(req, res) {
        res.send({ state: 'failure', user: null, message: "Invalid username or password" });
    });



    //log in
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/',
        failureRedirect: '/auth/failureLogin'
    }));

    //sign up
    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/auth/success',
        failureRedirect: '/auth/failure'
    }));

    //log out
    router.get('/signout', function(req, res) {
        req.logout();
        res.redirect('/auth/login');
    });

    return router;

}