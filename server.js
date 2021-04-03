const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const users=require('./routers/users');
const routes=require('./routers/routes');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/',users);
app.use('/',routes);
app.get("/ping",(req,res,next)=>{
	res.send("pong");
})
/*
app.get("/noha",(req,res,next)=>{
	next("error kber gdn");
})
*/
app.use(function(req,res,next){
	console.log("File Not Found walahi");
	res.status(404).send("File Not Found.");
});
app.use(function(error,req,res,next){
	console.log(error);
	res.send(error);

})
app.listen(3000,()=>{
	console.log("Server is up sir.");
})
