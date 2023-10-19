const http = require("http")


const server = http.createServer((request,response)=>{
    if(request.url==="/"){
        response.end("Welcome to Home Page");
    }else if(request.url==="/data"){
        response.end("Data is sending")
    }
})

server.listen(7000,()=>{
    console.log("Server is running at 7000");
})