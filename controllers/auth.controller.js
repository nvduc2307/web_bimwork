const User = require('../models/author.model');
const bcrypt = require('bcrypt');
class AuthController {
    //[GET] /auth/register
    getRegister(req, res, next) {
        res.render('auth/register',{
            pageTitle: 'register',
            userInfo: null,
        });
    }
    //[POST] /auth/register
    postRegister(req, res, next) {
        var {fullname, age, address, email, city, gender, username, password, confirmPassword} = req.body;
        bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT_ROUNDS), function(err, salt) {
            bcrypt.hash(password, salt, async function(err, hashPassword) {
                const userInfo = {fullname, age, address, email, gender, username, hashPassword,}
                var isEmailExisted = await User.findOne({email: email});
                var isUserNameExisted = await User.findOne({username: username});
                if(isEmailExisted || isUserNameExisted){
                    res.render('auth/register',{
                        pageTitle: 'register',
                        userInfo: req.body,
                    });
                } else {
                    var user = new User(userInfo);
                    await user.save();
                    res.redirect('/auth/login');
                }
            });
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