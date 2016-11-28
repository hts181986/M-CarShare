var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var userType = mongoose.model("UserType");

router.route('/').get(function(req, res) {
    userType.find(function(err, doc) {
        if (err) {
            return res.send(500, err);
        } else {
            return res.send(200, doc);
        }
    });
}).post(function(req, res) {
    var Type = new userType();
    Type.user_id = req.body.user_id;
    Type.type = req.body.type;
    Type.save(function(err, doc) {
        if (err) {
            return res.send(500, err);
        } else {
            return res.send(200, doc);
        }
    });
});

router.route('/:id').get(function(req, res) {
    userType.findOne(function(err, doc) {
        if (err) {
            return res.send(500, err);
        } else {
            return res.send(200, doc);
        }
    });
}).put(function(req, res) {
    userType.findOne({ user_id: req.params.id }, function(err, doc) {
        if (err) {
            return res.send(500, err);
        } else {
            doc.type = req.body.type;
            doc.save(function(err, doc) {
                if (err) {
                    return res.send(500, err);
                } else {
                    return res.send(200, doc);
                }
            });
        }
    });
}).delete(function(req, res) {
    userType.remove({ user_id: req.params.id }, function(err, doc) {
        if (err) {
            return res.send(500, err);
        } else {
            return res.send(200, doc);
        }
    });
});


module.exports = router;