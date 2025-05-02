const {Schema} = require("mongoose");
const UsersSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email: {
        type: String,    
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = UsersSchema;   
