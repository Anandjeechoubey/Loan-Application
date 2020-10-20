var express = require("express"),
    bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get('/',function(req,res){
    res.render("form");
});

const port = process.env.PORT || 3000 ;
app.listen(port,function(){
    console.log("Server Started!!");
});