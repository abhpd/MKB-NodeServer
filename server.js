const express = require("express");
const https = require("https");

const app = express();

var path = require('path');


//static-middlewares

app.use('/',express.static(__dirname+'/public'));
app.use('/knowmore',express.static(__dirname+'/knowmore'))

app.use('/login',express.static(__dirname+'/public/login'));
app.use('/questionnaire',express.static(__dirname+'/public/questions'));
app.use('/chat',express.static(__dirname+'/public/chat'));
app.use('/results',express.static(__dirname+'/public/results'));

//express.static(path.join(__dirname,"public")); //not working unfortunately

//------- GET ROUTES --------//

//Homepage
app.get("/",function(req,res){
    console.log("Homepage request.");
    res.sendFile(__dirname+"/public/index.html");
});

//knowmore-Homepage
app.get("/knowmore",function(req,res){
    res.sendFile(__dirname+"/public/knowmore/knowmore.html")
})

//login-page
app.get("/login",function(req,res){
    res.sendFile(__dirname+"/public/login/login.html");
});

//questionnaire-page
app.get("/questionnaire",function(req,res){
    res.sendFile(__dirname+"/public/questions/questions.html");
});

//chat-page
app.get("/chat",function(req,res){
    res.sendFile(__dirname+"/public/chat/chat.html");
});

//results-page
app.get("/results",function(req,res){
    res.sendFile(__dirname+"/public/results/results.html");
});


//-------- PORT ----------//
app.listen(3000,function(req,res){
    console.log("Server started at port 3000.");
});
