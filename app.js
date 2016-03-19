var express=require('express');
var commentRouter=express.Router();
var mongoose=require('mongoose');
var path=require('path');
var morgan=require('morgan');
var bodyParser=require('body-parser');

var comments=require('./models/database');

var app=express();


var commentRouter=require('./routes/routes');
var url = 'mongodb://localhost:27017/comment';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("database is connected");
});

//middleware;
app.use('/comment',commentRouter);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

var port=3000;
app.listen(port,function(err){

	console.log("server running on localhost at port "+port);
});
