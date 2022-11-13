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
    // {"car_type":"goat", "cost":12, "size":"large"}
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
   // for a specific car.
exports.car_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Car.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
exports.car_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Car.findById( req.params.id)
    // Do updates of properties
    if(req.body.car_manufacturer)
    toUpdate.car_manufacturer = req.body.car_manufacturer;
    if(req.body.car_model) toUpdate.car_model = req.body.car_model;
    if(req.body.car_cost) toUpdate.car_cost = req.body.car_cost;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
   };