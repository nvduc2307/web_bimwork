class AuthController {
    //[GET] /auth/register
    getRegister(req, res, next) {
        res.render('auth/register',{
            pageTitle: 'register',
            userInfo: null,
        });
    }
    getLogin(req, res, next) {
        res.render('auth/login',{
            pageTitle: 'Login',
            userInfo: null,
        });
    }
}
module.exports = new AuthController;