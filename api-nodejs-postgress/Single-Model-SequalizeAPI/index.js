const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// require("./module")
const {User}=require("./module/user")

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World')

})


User.sync({ alter: true })

app.listen(3000,()=>{
    console.log('Server is Running on Port: http://localhost:3000 ')
})