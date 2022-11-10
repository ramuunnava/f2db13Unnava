const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
    car_manufacturer: String,
    car_model: String,
    car_cost: Number
})
module.exports = mongoose.model("Car",
    carSchema)