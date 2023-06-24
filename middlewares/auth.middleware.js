const jwt = require('jsonwebtoken');
module.exports.requireAuth = (req, res, next) => {
    var cookieTokenUser = req.signedCookies.tokenUser;
    if(!cookieTokenUser) {
        res.redirect('/auth/login');
        return;
    };
    try {
        const decoded = jwt.verify(cookieTokenUser, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.redirect('/auth/login');
        return;
    }
};
