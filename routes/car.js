var express = require('express');
var router = express.Router();

const car_controlers= require('../controllers/car');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('car', { title: 'Search result for Car' });
});

var router = express.Router();
router.get('/',car_controlers.car_view_all_Page );
router.get('/detail',car_controlers.car_view_one_Page);
router.get('/create', car_controlers.car_create_Page);
router.get('/update', car_controlers.car_update_Page);
router.get('/delete', car_controlers.car_delete_Page);
module.exports = router;

