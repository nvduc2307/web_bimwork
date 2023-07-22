const User = require('../models/author.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const genarateToken = require('../utils/genarateToken');
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
    //[GET] /auth/login
    getLogin(req, res, next) {
        res.render('auth/login',{
            pageTitle: 'Login',
            userInfo: null,
        });
    }
    //[POST] /auth/login
    async postLogin(req, res, next) {
        var user = await User.findOne({email: req.body.email});
        if(!user) {
            res.render('auth/login',{
                pageTitle: 'Login',
                userInfo: req.body,
            });
            return;
        }
        bcrypt.compare(req.body.password, user.hashPassword, function(err, result) {
            if(err){
                res.render('auth/login',{
                    pageTitle: 'Login',
                    userInfo: req.body,
                });
                return;
            } 
            else
            {
                if(!result){
                    res.render('auth/login',{
                        pageTitle: 'Login',
                        userInfo: req.body,
                    });
                    return;
                }
                var tokens = genarateToken(user);
                res.cookie('userToken', tokens.accessToken, {
                    signed: true,
                });
                res.redirect('/admin');
            }
        });
    }
}
module.exports = new AuthController;