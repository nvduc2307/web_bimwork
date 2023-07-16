const User = require('../models/author.model');
class AdminController {
    //[GET] /admin/users
    async getUsers(req, res, next) {
        try {
            const countUserDeleted = await User.countDocumentsDeleted();
            const users = await User.find({});
            res.render('admin/users/users', {
                pageTitle: 'Users',
                users: users,
                countUserDeleted: countUserDeleted,
                path: '/admin/users',
            });
        } catch (error) {
            
        }
    }
    //[GET] /admin/users/:id/edit
    async getEditUser(req, res, next) {
        var user = await User.findOne({_id: req.params.id});
        res.render('admin/users/user-edit', {
            pageTitle: 'Edit User',
            user: user,
            path: '/admin/users',
        });
    }
    //[PATCH] /admin/users/:id/update
    async patchUpdateUser(req, res, next) {
        var userInfoToUpdate = {...req.body};
        userInfoToUpdate.photo = '/' + req.file.path.split('/').slice(1).join('/');
        userInfoToUpdate.photo = userInfoToUpdate.photo === '' ? '/uploads/default.jpeg': userInfoToUpdate.photo;
        await User.updateOne({_id: req.params.id}, userInfoToUpdate);
        res.redirect('/admin');
    }
    //[DELETE] /admin/users/:id/delete
    async deleteUser(req, res, next) {
        try {
            await User.delete({_id: req.params.id});
            res.redirect('back');
        } catch (error) {
            
        }
    }
    //[GET] /admin/users/trash
    async getUserTrash(req, res, next) {
        const users = await User.findDeleted({});
        res.render('admin/users/trash', {
            pageTitle: 'Trash Users',
            users: users,
            path: '/admin/users',
        });
    }
    //[PUT] /admin/users/:id/restore
    async putUserRestore(req, res, next) {
        try {
            await User.restore({_id: req.params.id});
        } catch (err) {
            
        }
        res.redirect('/admin');
    }
    //[DELETE] /admin/users/:id/destroy
    async destroyUser(req, res, next) {
        try {
            await User.deleteOne({_id: req.params.id});
        } catch (err) {
            
        }
        res.redirect('/admin');
    }
}
module.exports = new AdminController;
