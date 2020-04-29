const express = require('express');
const router = express.Router();
const signUpController = require('../controllers/signup-controller');

router.post("/", signUpController.userRegister);
router.post("/login", signUpController.userLogin);

module.exports = router;