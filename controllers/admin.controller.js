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
}
module.exports = new AdminController;
