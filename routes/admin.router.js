const path = require('path');
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const multer  = require('multer')
const upload = multer({ dest: './public/uploads/'})

router.delete('/users/:id/destroy', authMiddleware.requireAuth, adminController.destroyUser);
router.put('/users/:id/restored', authMiddleware.requireAuth, adminController.putUserRestore);
router.get('/users/trash', authMiddleware.requireAuth, adminController.getUserTrash);
router.delete('/users/:id/delete', authMiddleware.requireAuth, adminController.deleteUser);
router.patch('/users/:id/update', authMiddleware.requireAuth, upload.single('photo'), adminController.patchUpdateUser);
router.get('/users/:id/edit', authMiddleware.requireAuth, adminController.getEditUser);
router.get('/users', authMiddleware.requireAuth, adminController.getUsers);
router.get('/', authMiddleware.requireAuth, adminController.getUsers);
module.exports = router;