const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/users', authMiddleware.requireAuth, adminController.getUsers);
router.get('/', authMiddleware.requireAuth, adminController.getUsers);
module.exports = router;