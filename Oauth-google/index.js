const express=require("express")

const app=express()


const client_ID="sodium-sunup-401211"
const secret_Key=""


app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.get("/login",(req,res)=>{
    const url=`https://github.com/login/oauth/authorize?client_id=${client_ID}`
})

app.listen(8080,()=>{
    console.log('server is running')
})