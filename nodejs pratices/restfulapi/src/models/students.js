const mongoose =require("mongoose");

const validator=require("validator");

const studentSchemas= new mongoose.Schema({
    name:{
        type:String,
        require:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Gmail is Already Present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    phone:{
        type:Number,
        minlength:10,
        maxlength:10,
        unique:true,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

const Student= mongoose.model("Student",studentSchemas);

module.exports=Student;