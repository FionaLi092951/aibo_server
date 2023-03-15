const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();

app.use(bodyParser.json());


app.get("/", (req, res) => {
    return res.json("hellow world");
});

app.listen(80, () => {
    console.log("server running on http://127.0.0.1:81")
});
