const jwt = require("jsonwebtoken");
const secret = "3d9s4#@4lk@12r";
module.exports.secret = secret;
module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
        if (err) {
            res.status(401).json({ verified: false });
        } else {
            req.session.user = { nickname: payload.nickname };
            next();
        }
    });
}