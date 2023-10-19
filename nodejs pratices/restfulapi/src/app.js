const express = require("express")
const app=express();
require("./db/conn")


const Student=require("./models/students")
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/students",async (req,res)=>{
    
    try{
        const studentsList=await Student.find();
        res.send(studentsList);
    }
    catch(e){
        res.send(e);
    }

})

app.get("/students/:id", async (req,res)=>{
    try {
        const _id=req.params.id;
        const studentdata = await Student.findById(_id);
        console.log(studentdata)
        if(!studentdata){
            return res.status(404).send(`Student not found with id ${_id}`);
        }
        res.send(studentdata);
    } catch(e) {
        res.send(e)
    }
})

app.post("/students",async(req,res)=>{
    console.log(req.body);

    const user = new Student(req.body);
    user.save().then(()=>{
        res.send(user)
    })
    .catch((e)=>{
        res.send(e);
    })

    // res.send("Hello from other side postgahagagaga")
})


app.delete("/students/:id", async (req,res)=>{
    try {
        const deletedData = await Student.findByIdAndDelete(req.params.id);
        if (!deletedData ) {
            return res.status(400).send("No Data Found")
        }
        res.send(deletedData)
    } catch (e) {
        res.status(500).send(e)
    }
})


app.patch("/students/:id", async (req,res)=>{
    try {
        const _id=req.params.id;
        const updateddata = await Student.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        if(!updateddata){
            return res.status(404).send("Data Is Not Present")
        }
        res.send(updateddata)
    } catch (error) {
        res.status(404).send(error)
    }
})


app.listen(port,()=>{
    console.log(`Server is running on  http://localhost:${port}`);
})