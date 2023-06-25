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
    //[GET] /admin/user/:id/edit
    async getEditUser(req, res, next) {
        var user = await User.findOne({_id: req.params.id});
        res.render('admin/users/user-edit', {
            pageTitle: 'Edit User',
            user: user,
            path: '/admin/users',
        });
    }
}
module.exports = new AdminController;
