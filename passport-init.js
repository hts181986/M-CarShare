var LocalStrategy = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');
var users = mongoose.model("users");
module.exports = function(passport) {

    // Passport needs to be able to serialize and deserialize users to support persistent login sessions
    passport.serializeUser(function(user, done) {
        console.log('serializing user:', user._id);
        return done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        users.findById(id, function(err, doc) {
            if (err) {
                return done(err, false);
            }
            if (!doc) {
                return done("User not found", false);
            }
            return done(null, doc);
        });

    });

    passport.use('login', new LocalStrategy({
            passReqToCallback: true
        },
        function(req, username, password, done) {
            users.findOne({ username: username }, function(err, doc) {
                if (err) {
                    return done(err, false);
                }
                if (!doc) {
                    return done("User not found", false);
                }

                if (!isValidPassword(doc, password)) {
                    return done("password in valid", false);
                }
                return done(null, doc);
            });
        }
    ));

    passport.use('signup', new LocalStrategy({
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) {
            users.findOne({ username: username }, function(err, doc) {
                if (err) {
                    return done(err, false);
                }
                if (doc) {
                    return done("User already exsist", false);
                }
                var newUser = users();
                newUser.username = username;
                newUser.password = createHash(password);
                newUser.save(function() {
                    if (err) {
                        return done(err, false)
                    }
                    return done(null, newUser);
                });
            });


        }));

    var isValidPassword = function(user, password) {
        return bCrypt.compareSync(password, user.password);
    };
    // Generates hash using bCrypt
    var createHash = function(password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    };

};