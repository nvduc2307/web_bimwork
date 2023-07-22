const jwt = require('jsonwebtoken');
module.exports.requireAuth = (req, res, next) => {
    var userToken =  req.signedCookies.userToken;
    if(!userToken) { 
        res.redirect('/auth/login');
    }
    try {
        var decoded = jwt.verify(userToken, process.env.ACCESS_TOKEN_SECRET);
        res.locals.user = decoded._doc;
        next();
      } catch(err) {
        console.log(err);
        res.redirect('/auth/login');
      }
}
