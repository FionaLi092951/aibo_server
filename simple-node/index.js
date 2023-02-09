const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/set", (req, res) => {
    // console.log(req.body);
    data.test += 1;
    res.json(data.test);
});

app.get("/get", (req, res) => {
    // console.log(req.body);
    res.json(data.test);
});

app.listen(3000, () => {
    console.log("server running on http://127.0.0.1:3000")
});

// 存放数据
var data = {
    test: 0
}