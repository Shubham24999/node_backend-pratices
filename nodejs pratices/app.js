const {Client} =require("pg");

const client=new Client({
    user:"postgres",
    host:"localhost",
    database:"Vibhoredata",
    password:"root",
    port:5432
});

client.connect()
.then(()=>{
    console.log("Database Connected---");
})
.catch((e)=>console.log("DB connected Failed"+"\n"+e))

client.query(process.argv[2]).then(res=>console.log(res.rows)).catch(e=>console.log(e))


