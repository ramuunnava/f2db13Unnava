const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
    car_manufacturer: String,
    car_model: {type:String,length:15},
    car_cost: {type:Number,min:10,max:100000}
})
module.exports = mongoose.model("Car",
    carSchema)