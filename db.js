var mysql = require('mysql');
require('dotenv').config();

var dbConfig = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.MYSQL_PW
});

// create pugjs database and user table
dbConfig.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    dbConfig.query("CREATE DATABASE IF NOT EXISTS pugjs", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
    dbConfig.query("USE pugjs", function (err, result) {
        if (err) throw err;
        console.log("Using database");
    });
    dbConfig.query("CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255))", function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});

// export all results to server.js
module.exports = {
    con: dbConfig
};

