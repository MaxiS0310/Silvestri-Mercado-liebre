const express = require("express");
const app = express();
const path = require("path");

//process es un objeto que esta dentro de node
const port = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, "./public")))


app.listen(port, () =>{
    console.log(`Server on ${port}`);
})

app.get("/", function(req,res){
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get("/crear-cuenta", function(req,res){
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});



