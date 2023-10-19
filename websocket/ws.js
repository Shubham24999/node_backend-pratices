const {WebSocketServer}=require("ws");

const wss=new WebSocketServer({port:8080})

wss.on("connection",(socket)=>{
    console.log("Connection was made. ");
    socket.send("Hello from Server")

    socket.on("message",(msg)=>{
        console.log("msg",msg.toString("utf-8"));
    })
})