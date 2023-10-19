const {testDbConnection} = require("./db");


const express = require("express");

const app = express();


// app.get('/', function (req, res) {
//     console.log("Helo World");
//   res.send('Hello Shubham');
// })


// testDbConnection.connect();

app.get("/", async (req, res) => {

    try {
        console.log(req.params.id)
        const result = await testDbConnection.query("SELECT * FROM Company", {
            // type: testDbConnection.QueryTypes.SELECT
        });
        console.log(result);
        console.log(result.length);
        if (result.length > 0) {
            res.send(result);
        } else {
            res.send("No user found with the specified ID.");
        }
    } catch (error) {
        res.send(error);
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
