var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var cars = mongoose.model("CarSchema");

//Used for routes that must be authenticated.
function isAuthenticated(req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects

    //allow all get request methods
    // if(req.method === "GET"){
    // 	return next();
    // }

    if (req.isAuthenticated()) {
        return next();
    }

    // if the user is not authenticated then redirect him to the login page
    return res.redirect('/login.html');
};

//Register the authentication middleware
router.use('/cars.html', isAuthenticated);
router.use('/user.html', isAuthenticated);
//api for all posts
router.route('/cars')

//create a new post
// .post(function(req, res) {
//     //TODO create a new post in the database
//     var post = new posts();
//     post.title = req.body.title;
//     post.text = req.body.text;
//     post.created_by = req.body.created_by;
//     post.save(function(err, doc) {
//         if (err) {
//             return res.send(500, err);
//         }
//         return res.json(doc);
//     });
// })

.get(function(req, res) {
    //TODO get all the posts in the database
    cars.find(function(err, doc) {
        if (err) {
            return res.send(500, err);
        }
        var data = {
            data: doc
        };
        return res.render("cars", data);
    });
});

//api for a specfic post
// router.route('/posts/:id')

// //create
// .put(function(req, res) {
//     posts.findById(req.params.id, function(err, doc) {
//         if (err) {
//             return res.send(500, err);
//         }
//         doc.title = req.body.title;
//         doc.text = req.body.text;
//         doc.created_by = req.body.created_by;
//         doc.save(function(err, doc) {
//             if (err) {
//                 return res.send(500, err);
//             }
//             return res.json(doc);
//         });
//     });

// })

// .get(function(req, res) {
//     posts.findById(req.params.id, function(err, doc) {
//         if (err) {
//             return res.send(500, err);
//         }
//         return res.json(doc);
//     });
// })

// .delete(function(req, res) {
//     posts.remove({ _id: req.params.id }, function(err, doc) {
//         if (err) {
//             return res.send(500, err);
//         }
//         return res.send("post were deleted :-(");
//     });
// });

module.exports = router;