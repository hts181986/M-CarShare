var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    created_at: { type: Date, default: Date.now }
});

var CarSchema = new mongoose.Schema({
    car_number: String,
    location: String
});

mongoose.model("users", userSchema);
mongoose.model("cars", CarSchema);