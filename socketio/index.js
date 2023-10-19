const express=require("express")
const http=require("http")

const {Server}=require("socket.io")

const app=express()
// created a noramal http server

const httpserver=http.createServer(app)

app.get("/",(req,res)=>{
        res.sendFile(__dirname+"/index.html")
        // res.sendFile("Welcome to Home ")
})

httpserver.listen(8080)

// created a web socket server with the help of http server

const io=new Server(httpserver)
let user_count=0
let messages=[]
io.on("connection",(socket)=>{
    user_count++;
    console.log(`user's connected ${user_count}`)

    socket.on("message",(message)=>{
        console.log(`message is ${message}`)
        messages.push(message)

        // socket.emit("sent","Hello from Server")
        
        
    })
    io.emit("users",user_count)
    io.emit("msg",messages);
    socket.on("disconnect",()=>{
        
        console.log(`User has left`)
        user_count--;
        socket.broadcast.emit("users",user_count)
    })
})