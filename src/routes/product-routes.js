const express = require('express')
var router = express.Router(); //interceptação das rotas
const productController = require('../controllers/product-controllers');

//POST
router.post("/", productController.post);

//GET ALL
router.get("/", productController.get);

//findById
router.get("/:productId", productController.getById);

//PUT
router.put("/:productId", productController.put);

router.delete("/:productId", productController.delete);


module.exports = router;