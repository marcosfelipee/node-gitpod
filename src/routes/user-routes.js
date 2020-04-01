const express = require('express')
var router = express.Router(); //interceptação das rotas
const userController = require('../controllers/user-controllers');

//POST
router.post("/", userController.post);

//GET ALL
router.get("/", userController.get);

//GET BY ID
router.get("/:userId", userController.getById);

module.exports = router;