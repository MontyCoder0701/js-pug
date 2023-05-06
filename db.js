var mysql = require('mysql');
require('dotenv').config();

var dbConfig = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.MYSQL_PW
});

module.exports = {
    con: dbConfig.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    })
};