//grabing the packages;
var mongoose=require('mongoose');
var Schema=mongoose.Schema;


//creating the Schema;

var commentSchema=new Schema({
		title:{
			type:String,
			required:true
		},
		upvotes:{
			type:Number,
			default:0
		},
		downvotes:{
			type:Number,
			default:0
		}
});


/*commentSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};

commentSchema.methods.downvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};
*/
var comments=mongoose.model('comment',commentSchema);
module.exports=comments;
