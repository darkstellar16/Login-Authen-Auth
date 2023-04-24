const jwt = require("jsonwebtoken");

const checkToken = (req, res, next) => {

    const token = req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
        res.status(400).send("Need token for verification");
    }
    try {

        const decoded = jwt.verify(token, "fuckoff ")
        req.user = decoded

    } catch (error) {
        console.log(error);

    }
    return next();
}

module.exports = checkToken;