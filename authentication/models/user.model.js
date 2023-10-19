const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    age:Number,
    city:String

})


const UserModel=mongoose.model("jwtuser",userSchema)

module.exports={
    UserModel
}