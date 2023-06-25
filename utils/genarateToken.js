const jwt = require('jsonwebtoken');
function genarateToken(content) {
    var {_id, ...payload} = content;
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET);
    return {accessToken, refreshToken}
}
module.exports = genarateToken;

