const mongoose=require("mongoose");

const Movie=mongoose.model("Movie");

module.exports.getOne=function(req,res){
    const movieId=req.params.movieId;
    if (!mongoose.isValidObjectId(movieId)) {
        res.status(400).json({"message":"not valid ID"});
        return;
    }
    Movie.findById(movieId).exec(function(err,movie){
        const response={
            status:200
            ,message:movie
        }
        if (err) {
            response.status=500;
            response.message=err
        }else if(!movie){
            response.status=404;
            response.message="Movie id not found"
        }
        res.status(response.status).json(response.message);

    });    
}
module.exports.deleteOne=function(req,res){
    const movieId=req.params.movieId;
    if (!mongoose.isValidObjectId(movieId)) {
        res.status(400).json({"message":"not valid ID"});
        return;
    }
    Movie.findByIdAndDelete(movieId).exec(function(err,deletedMovie){
        const response={
            status:200
            ,message:deletedMovie
        }
        if (err) {
            response.status=500;
            response.message=err
        }else if(!deletedMovie){
            response.status=404;
            response.message="Movie id not found"
        }
        res.status(response.status).json(response.message);

    });    
}

module.exports.getAll=function(req,res){
    let offset=0;
    let count=5;
    const maxCount=10;
    if (req.query && req.query.offset) {
        offset=req.query.offset;
    }
    if (req.count && req.query.count) {
        count=req.query.count;
    }
    if (isNaN(offset) || isNaN(count)) {

        res.status(400).json({"message":"not valid parameters"});
       
    }
    Movie.find().skip(offset).limit(count).exec(function(err,movies){
        if (err){

                res.status(500).json({"message":"Internal server error"});
                
        } else{
            res.status(200).json(movies);
        }
    });

}