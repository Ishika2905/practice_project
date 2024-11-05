const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    firstName:{
        type : String , 
        require : [ true , "please add your name"],
    },
    Speciality:{
        type : String , 
        require : [ true , "please add your last speciality"],
    },
    email:{
        type : String , 
        require : [ true , "please add your last email"],
    },
    age:{
        type : Number , 
        require : [ true , "please add your age"],
    },
    phoneNumber:{
        type : Number , 
        require : [ true , "please add your phone number"],
    },
    Experience:{
        type : Number , 
        require : [ true , "please add your  experienced years"],
    },
    address:{
        type : String , 
        require : [ true , "please add your address"],
    }
},
{
    timestamps : true ,
});
module.exports = mongoose.model("User" , userSchema);