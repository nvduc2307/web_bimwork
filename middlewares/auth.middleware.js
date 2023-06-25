module.exports.requireAuth = (req, res, next) => {
    var userToken =  req.signedCookies.userToken;
    if(!userToken) { 
        res.redirect('/auth/login');
    }
    try {
        var decoded = jwt.verify(userToken, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded;
        next();
      } catch(err) {
        console.log(err);
        res.redirect('/auth/login');
      }
}
