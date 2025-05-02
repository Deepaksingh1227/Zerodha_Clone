const bcrypt= require("bcrypt");
const {UsersModel} =require("../model/UsersModel");
const jwt= require("jsonwebtoken");




const signup = async (req, res) => {
    try{
        console.log("Signup Request Body:", req.body);
        const{name,email,password} = req.body;
        const user = await UsersModel.findOne({email});
        if(user){
            return res.status(400)
                .json({message:"user is already exist, you cna login", success:false});

        }
        const newUser = new UsersModel({name ,email, password});
        newUser.password=await bcrypt.hash(password,10);
        await newUser.save();
        res.status(201)
            .json({
                message:"Signup Seccessfully", 
                success:true

            })        

    } catch(error){
        console.error("Signup error:", error);
        res.status(500).json({
            message: "Internal Server error",
            success: false
        });
    }
    
    
    
};
const login = async (req, res) => {
    try{
        const{email,password} = req.body;
        const user = await UsersModel.findOne({email});
        const errorMsg="Auth failed email or password is wrong";
        if(!user){
            return res.status(403)
                .json({message:errorMsg, success:false});

        }

        const ispassEqual = await bcrypt.compare(password,user.password);
        if(!ispassEqual){
            return res.status(403)
                .json({message:errorMsg, success:false});
        }
        const jwtToken = jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:"1h"});
        res.status(200)
            .json({
                message:"Login Seccessfully", 
                success:true,
                token:jwtToken,
                userId:user._id,
                name:user.name
    

            })        

    } catch(error){
        res.status(500)
        .json({
            message:"Internal Server error",
            success:false
        })

    }
    
};

module.exports = { signup,login };