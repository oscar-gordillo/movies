const mongoose=require("mongoose");
require("./movies-model");

mongoose.connect(process.env.DB_URL);

mongoose.connection.on("connected",function(){
    console.log("mongoose connected");
});
mongoose.connection.on("disconnected",function(){
    console.log("mongoose disconnected");
});
mongoose.connection.on("error",function(err){
    console.log("mongoose error",err);
});