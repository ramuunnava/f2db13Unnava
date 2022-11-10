var Car = require('../models/car');
// List of all Cars
exports.car_list = async function(req, res) {
    try{
    theCars = await Car.find();
    res.send(theCars);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific Car.
exports.car_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Car detail: ' + req.params.id);
};
// Handle Car create on POST.

// Handle Car delete form on DELETE.
exports.car_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Car delete DELETE ' + req.params.id);
};
// Handle Car update form on PUT.
exports.car_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Car update PUT' + req.params.id);
};
exports.car_view_all_Page = async function(req, res) {
    try{
    theCars = await Car.find();
    res.render('car', { title: 'Car Search Results', results: theCars });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
exports.car_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Car();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.car_manufacturer = req.body.car_manufacturer;
    document.car_model = req.body.car_model;
    document.car_cost = req.body.car_cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };