const jwt= require("jsonwebtoken");
const ensureAuthenticated = (req, res, next) => {
    if(!auth){
        return res.status(401).json({message:"Unauthorized, jwt token is missing"});  
    }
    try{
        const decoded = jwt.verify(auth,process.env.JWT_SECRET_KEY);
        req.user = decoded.user;
        next(); 
    }catch(error){
        return res.status(401).json({message:"Unauthorized, jwt token wrong or expired"});
    }
}

module.exports = ensureAuthenticated;