const express = require("express");
const pug = require("pug");
const path = require("path");

const app = express();

app.set("view engine", "pug"); // set is for setting the config for express
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname, "/public"))); // use is for using the middleware

// handlers
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/calendar", (req, res) => {
    res.render("calendar");
});

app.get("/camera", (req, res) => {
    res.render("camera");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/register", (req, res) => {
    res.render("register");
});

var db = require("./db");
console.log(db.con);

// run the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
    console.log("http://localhost:3000")
});

