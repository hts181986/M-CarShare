var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var cars = mongoose.model("cars");

router.route('/').post(function(req, res) {
    //TODO create a new post in the database
    var car = new cars();
    car.type = req.body.type;
    car.plateno = req.body.plateno;
    car.color = req.body.color;
    car.mileage = req.body.mileage;
    car.model = req.body.model;
    car.brand = req.body.brand;
    car.location = req.body.location;
    car.cordinates = req.body.cordinates;
    car.rate = req.body.rate;
    car.available = req.body.available;
    car.save(function(err, doc) {
        if (err) {
            return res.send(500, err);
        }
        return res.json(doc);
    });
}).get(function(req, res) {
    //TODO get all the posts in the database
    cars.find(function(err, doc) {
        if (err) {
            return res.send(500, err);
        }
        return res.send(200, doc);
    });
});

//api for a specfic post
router.route('/:id').put(function(req, res) {
    cars.findById(req.params.id, function(err, doc) {
        if (err) {
            return res.send(500, err);
        }
        doc.type = req.body.type;
        doc.plateno = req.body.plateno;
        doc.color = req.body.color;
        doc.mileage = req.body.mileage;
        doc.model = req.body.model;
        doc.brand = req.body.brand;
        doc.location = req.body.location;
        doc.cordinates = req.body.cordinates;
        doc.rate = req.body.rate;
        doc.available = req.body.available;
        doc.save(function(err, doc) {
            if (err) {
                return res.send(500, err);
            }
            return res.json(doc);
        });
    });

}).get(function(req, res) {
    cars.findById(req.params.id, function(err, doc) {
        if (err) {
            return res.send(500, err);
        }
        return res.json(doc);
    });
}).delete(function(req, res) {
    cars.remove({ _id: req.params.id }, function(err, doc) {
        if (err) {
            return res.send(500, err);
        }
        return res.send("post were deleted :-(");
    });
});
module.exports = router;