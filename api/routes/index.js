const express=require("express")
const router=express.Router();

const moviesController=require('../controllers/movies.controllers')

router.route('/test').get(function(req,res){
    res.status(200).json({"message":'OK'});
});

router.route('/movies').get(moviesController.getAll);

router.route('/movies/:movieId').get(moviesController.getOne).
delete(moviesController.deleteOne);

module.exports=router;