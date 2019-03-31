var express = require('express');
const fs = require("fs");
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/", function(req, res){
    res.send("Home page, let's try /data/:time route ;-)");
});

app.get("/data/:time", function(req, res){

    fs.readFile(`./data/${req.params.time}.json`, "utf8", function(err, data) {
        if (err) {
            res.json(JSON.stringify([]))
        } else {
            res.json(data);
        }
    });
});


app.listen(8000);