
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express=require("express")

const app=express()

const client_Secret ="d0e641a5b07fcb7e3c8aecf40db880c88ad8bbcf"
const client_ID="bf37bb27d8d7784701bc"


app.get("/",(req,res)=>{
    res.send("API base URL")
})


app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.get("/auth.github",async (req,res)=>{
    const {code}=req.query
    console.log(code);

    const response=await fetch('https://github.com/login/oauth/access_token',{
        method:'POST',
        headers:{'Content-Type':'application/json',Accept:"application/json"},
        body:JSON.stringify({client_id : client_ID ,client_secret  : client_Secret , code })
    })

    const accessToken=await response.json();

    console.log(accessToken);

    const userDeatils= await fetch(`https://api.github.com/user`,{
        headers:{
            Authorization: `Bearer ${accessToken.access_token}`
        }
    }).then(data=>data.json()).catch(err=>console.log(err))

    console.log(userDeatils);
    res.send({"msg":"Log In Success.","userDetails":[userDeatils.name,userDeatils.company]})
})

app.listen(8080,()=>{
    console.log(`server is running localhost:${8080}`)
})