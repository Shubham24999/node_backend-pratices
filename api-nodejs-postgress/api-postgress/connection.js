const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "your PostgreSQL db password",
    database: "your database name in PostgreSQL"
})

module.exports = client
