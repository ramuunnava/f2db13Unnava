var express = require('express');
var router = express.Router();

const car_controlers= require('../controllers/car');
/* GET home page. */
const secured = (req, res, next) => {
  if (req.user){
    return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
}
router.get('/', function(req, res, next) {
  res.render('car', { title: 'Search result for Car' });
});

var router = express.Router();
router.get('/', car_controlers.car_view_all_Page );
router.get('/detail',car_controlers.car_view_one_Page);
router.get('/create',secured, car_controlers.car_create_Page);
router.get('/update',secured, car_controlers.car_update_Page);
router.get('/delete',secured, car_controlers.car_delete_Page);
module.exports = router;

