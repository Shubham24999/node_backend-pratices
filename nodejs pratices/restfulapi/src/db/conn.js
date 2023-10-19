const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/studentslist",{
    // useCreateIndex:true,
    useNewUrlParser : true , 
    useUnifiedTopology:true 
})
.then(()=>{
    console.log("Connection is SuccessFull");
})
.catch((e)=>{
    console.log("No Connection");
})