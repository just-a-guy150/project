const mysql = require("mysql2");
require("dotenv").config();

let host = process.env.HOST_URL;
let port = process.env.PORT;
let user = process.env.DB_USER;
let password = process.env.PASSWORD;
let dbname = process.env.DATABASE_NAME;

const connection = mysql.createConnection({
    host,
    user,
    password,
    port,
    database: dbname
});

connection.connect(async (err) => {
    if (err) {
        console.error("Error connection: " + err.stack);
        return;
    }
});

module.exports = connection;