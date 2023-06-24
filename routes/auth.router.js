const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

/* GET users listing. */
router.get('/register', authController.getRegister);
router.get('/login', authController.getLogin);

module.exports = router;
