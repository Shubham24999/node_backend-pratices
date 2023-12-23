const client = require("./connection.js")

const express = require('express');
const app = express();

client.connect();
app.get('/Company',(req,res)=>{
    client.query('Select * from Company',(err,result)=>{
        if(!err){
            console.log(result);
            res.send(result.rows)

        }else{
            res.send(http.STATUS_CODE["404"]);
        }
    })
    client.end();
})




app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300");
})
