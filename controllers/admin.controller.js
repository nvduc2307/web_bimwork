const User = require('../models/author.model');
class AdminController {
    //[GET] /admin/users
    async getUsers(req, res, next) {
        const countUserDeleted = await User.countDeleted();
        const users = await User.find({});
        res.render('admin/users/users', {
            pageTitle: 'Users',
            users: users,
            countUserDeleted: countUserDeleted,
            path: '/admin/users',
        });
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
        var userDelete = await User.findOne({_id: req.params.id});
        if(userDelete) {
            await userDelete.delete();
        }
       res.redirect('back');
    }
}
module.exports = new AdminController;
