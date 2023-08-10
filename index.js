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


// USE 
app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});





app.post('/fruits', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    fruits.push(req.body);
    console.log(fruits);
    res.send('data received');
});

// POST
app.post('/fruits', (req, res) => {
    res.send('hi');
});


//add SHOW route
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.send(fruits);
});



app.listen('3001',(req, res)=>{
    console.log("server is now listening on port 3000")
})