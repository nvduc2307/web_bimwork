const jwt = require('jsonwebtoken');
module.exports = payload => {
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET,{
    });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    });
    return {accessToken, refreshToken}
}
