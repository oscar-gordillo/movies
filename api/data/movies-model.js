const mongoose=require('mongoose');

const tomatoesSchema=mongoose.Schema({
    viewer:{
        rating:Number
    }
});
const movieSchema=mongoose.Schema({
    title: String
    ,year:Number
    ,type:String
    ,released:Date
    ,genres:[String]
    ,directors:[String]
    ,tomatoes:tomatoesSchema

});

mongoose.model("Movie",movieSchema,"movies");