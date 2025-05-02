const Joi = require("joi");
const SignupValidation=(req , res , next)=>{

    const Schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    });
    const {error}= Schema.validate(req.body);
    if(error){
        return res.status(400).json({error: error.details[0].message});

    }
    next();
    
}
const loginValidation=(req , res , next)=>{

    const Schema = Joi.object({
        
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    });
    const {error}= Schema.validate(req.body);
    if(error){
        return res.status(400).json({error: error.details[0].message});

    }
    next();
    
}
module.exports={SignupValidation,loginValidation};