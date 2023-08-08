const express = require('express')

const app = express(); 

const PORT = 3000

const fruits = require('./models/fruits.js');

// -----MiddleWare 
app.set("view engine", "jsx");

app.engine("jsx", require("express-react-views").createEngine());



app.get('/fruits/', (req, res) => {
    res.send(fruits);
});

//add show route
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.send(fruits);
});



app.listen('3001',(req, res)=>{
    console.log("server is now listening on port 3000")
})