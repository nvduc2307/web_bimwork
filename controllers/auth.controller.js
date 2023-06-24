const User = require('../models/author.model');
const md5 = require('md5');
const genarateToken = require('../utils/genarateToken');
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
    async postLogin(req, res, next) {
        var userInfo = req.body;
        const user = await User.findOne({email: userInfo.email});
        if(!user){
            res.render('auth/login', {
                pageTitle: 'Login',
                userInfo: req.body
            });
            return;
        }
        if(md5(userInfo.password) !== user.password) {
            res.render('auth/login', {
                pageTitle: 'Login',
                userInfo: req.body
            });
            return;
        }
        const {_id,...userRest} = user;
        const tokens = genarateToken(userRest);
        res.cookie('tokenUser', tokens.accessToken, {
            signed: true
        });
        res.redirect('/admin/users');
    }
}
module.exports = new AuthController;