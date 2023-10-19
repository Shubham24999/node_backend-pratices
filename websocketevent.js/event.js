
const {EventEmitter}=require("events")

const Xevent= new EventEmitter();
const Yevent= new EventEmitter();

Yevent.on("thali",()=>{
    console.log('y eat in thali event');
})

Xevent.on('food',(name)=>{
    console.log("Welcome to Food Lecture  "+name);
    Yevent.emit("thali")
})

Xevent.on("read",()=>{
    console.log("Read the book");
})

Yevent.on("ground",()=>{
    console.log("Going on Ground");
})
Xevent.on("play",()=>{
    console.log("Played with friends");
    Yevent.emit("ground")
})

console.log("All Events with Key Name")
Xevent.emit("food","Shubham")
Xevent.emit("play")



// on server side

// var ws= new WebSocket("ws://localhost:8080/"); ws.onmessage=(msg)=>console.log(msg)