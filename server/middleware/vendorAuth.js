const jwt = require('jsonwebtoken')

const vendorAuthMiddleware = (req, resp, next) => {
    const token = req.headers.authorization
    //console.log(token)
    const decodedToken = jwt.verify(token, "secretKey")
    //console.log(decodedToken)

    if (decodedToken) {
        req.body.vendor = decodedToken
       // console.log(req.body.vendor)
        next();
    }
    else {
        return resp.status(200).send({ success: false, message: "Invalid Token /Expired Token" })
    }
}


module.exports = vendorAuthMiddleware