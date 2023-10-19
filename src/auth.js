const jwt = require("jsonwebtoken");

const auth = (req,res,next) => {
    const authorization = req.headers['authorization'];
    const token = (String(authorization).startsWith("Bearer ")) ? authorization.slice(7, authorization.length) : authorization;
    if(token){
        jwt.verify(token, "barata-Chave secreta", (err,decoded) => {
            if(err) return res.status(401).json({error: err });
            req.decoded = decoded;
            return next();
        })
    }else{
        return res.status(401).json({error: "Unauthorized" });
    }
}

module.exports = auth;