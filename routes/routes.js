var express=require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');

var comments=require('../models/database');
var commentRouter=express.Router();
commentRouter.use(bodyParser.json());
commentRouter.route('/')
.get(function (req,res,next) {
	// body...
	comments.find({},function(err,data){
		if(err)
			throw err;
		res.json(data);
	});
})
.post(function(req,res,next){

comments.create(req.body,function(err,data){
	console.log(req.body.cmtname);
		
		console.log("comment inserted");
		console.log(data);
		res.send(data);
		res.end('Added the comment with id ');

	});

});


commentRouter.route('/upvotes/:id')
.get(function(req,res,next){
comments.findById(req.params.id,function(err,data){
		if(err)
			throw err;
		res.json(data);
	}); 

})
.put(function(req,res,next){
	comments.findByIdAndUpdate(req.params.id,{
		$inc:{upvotes:1}
	},function(err,data){
		if(err)
			throw err;
		res.send(data);
	});
});
commentRouter.route('/downvotes/:id')
.put(function(req,res,next){
	comments.findByIdAndUpdate(req.params.id,{
		$inc:{downvotes:1}
	},function(err,data){
		if(err)
			throw err;
		res.send(data);
	});
});
module.exports=commentRouter;