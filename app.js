const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.resolve(__dirname, "./public")));

app.listen(3000, () => {
    console.log("Server Run")
});

app.get("/", function(req,res){
    res.sendFile(path.resolve(__dirname, "views/home.html"))
});