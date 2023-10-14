var express = require('express');
var router = express.Router();
let productController = require('../controllers/product');
router.post('/create', productController.create);
module.exports = router;

//route for find all product
var express = require('express');
var router = express.Router();
let productController = require('../controllers/product');
router.get('/list', productController.list);
router.post('/create', productController.create);
module.exports = router;

//route for find product by id

var express = require('express');
var router = express.Router();
let productController =
require('../controllers/product');
router.get('/list', productController.list);
router.post('/create',productController.create);
router.get('/get/:productId',productController.productByID,productController.read);
module.exports = router;

//update current product
var express = require('express');
var router = express.Router();
let productController =
require('../controllers/product');
router.get('/list', productController.list);
router.post('/create',productController.create);
router.get('/get/:productId',productController.productByID,productController.read);
router.put('/edit/:productId',productController.update);

//remove existing porduct by id
var express = require('express');
var router = express.Router();
let productController =
require('../controllers/product');
router.get('/list', productController.list);
router.post('/create', productController.create);
router.get('/get/:productId',productController.productByID, productController.read);
router.put('/edit/:productId',productController.update);
router.delete('/delete/:productId',productController.remove);
module.exports = router;