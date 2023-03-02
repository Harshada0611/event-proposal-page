const jwt = require('jsonwebtoken')

const vendorAuthMiddleware = (req, resp, next) => {
    const token = req.headers.authorization
    if(!token){
        return resp.status(401).json({
            status: 'failure',
            message: 'Access denied'
        })
    }
    //console.log(token)
    try {
        const {_id} = jwt.verify(token, "secretKey")
    //console.log(decodedToken)

    if (_id){
        req.vendor = _id;
        next();
    }
    }catch(e){
        return resp.status(500).json({
            status: 'failure',
            message: e.message
        })
    }
}


module.exports = vendorAuthMiddleware