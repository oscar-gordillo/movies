const express=require('express');
const app=express();
require("dotenv").config();
require("./api/data/db.js");

const routes=require("./api/routes");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(function(req,res,next){
    console.log(req.method,req.url);
    next();
});

app.use("/api",function(req,res,next){
    res.header('Access-Control-Allow-Origin','http://localhost:4200');
    res.header('Access-Control-Allow-Headers','Origin, XRequested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    next();
});

app.use("/api",routes);

const server=app.listen(process.env.port, ()=>{
    console.log('listening on '+server.address().port);
});