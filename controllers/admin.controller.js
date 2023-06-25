class AdminController {
    //[GET] /admin/users
    getUsers(req, res, next) {
        res.render('admin/users/users', {
            pageTitle: 'Users'
        });
    }
}
module.exports = new AdminController;
