const express=require("express")
const {connection}=require("./config/db")
const jwt = require('jsonwebtoken');
const {UserModel}=require("./models/user.model")
const {authentication}=require("./middlewares/authentication")
const bcrypt=require("bcrypt")


const app=express()
app.use(express.json());



app.get("/",(req,res)=>{
    res.send("jwt implementation")
})

app.post("/signup",async (req,res)=>{
    const {name,email,age,password,city}=req.body;

    console.log(req.body);
    
    bcrypt.hash(password, 5 , async (err, hash)=> {
        if(err){
            console.log('Something went wrong', err);
        }else{
            let userdetails = new UserModel({ name, email,age,password:hash,city});
            await userdetails.save()
            res.status(201).send({"msg":"User has been registered successfully"})
        }
        
    });
})

app.post("/login",async (req,res)=>{
    const {email,password}=req.body;
    const user=await UserModel.aggregate([{$match:{email}}]) 
    console.log(user)
    if(user.length!==0){
        bcrypt.compare(password, user[0].password, function(err, result) {

            if(result){
                const token = jwt.sign({email, id: user[0]._id,city:user[0].city }, 'jwt',{expiresIn:60});


                const refreshToken=jwt.sign({id:user[0]._id},"refreshjwt",{expiresIn:300})
                res.status(202).send({"msg":"Login Success","token":token,"refreshToken":refreshToken});
                
            }else{
                res.send({"msg":"Email or password is incorrect"});
            }
        });
    }else{
        res.status(403).send({"msg":"This user is not Registered"});
    }
    
})

app.get("/details",authentication,async (req,res)=>{
    res.send({"msg":"All the Details are Here"})
})

app.get("/refreshtoken",(req,res)=>{
    const refreshToken=req.headers?.authorization
    
    if(!refreshToken){
        return res.send({"msg":"Please Log IN again!"})
    }
    jwt.verify(refreshToken,"refreshjwt",(err,decoded)=>{
        if(err){
            return res.send({"msg":"Please Log IN again!"})
        }
        const newToken=jwt.sign({id: decoded.id},'jwt',{expiresIn:60})
        res.send({"token":newToken})
    })
})

app.listen(8080,async ()=>{

    try {
        await connection
        console.log(`DB connectin has been established`)
        console.log(`app in running on port localhost:8080`)
    } catch (error) {
        console.log(`something went wrong:${error}`)
    }
    
})