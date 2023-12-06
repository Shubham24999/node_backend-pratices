const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "your mongo db password",
    database: "your database name"
})

module.exports = client
