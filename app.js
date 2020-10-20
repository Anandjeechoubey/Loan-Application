require('dotenv').config();

var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    methodOverride = require("method-override");

var app = express();
var Responses = require("./responseSchema");

app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_Url , { useNewUrlParser: true, useFindAndModify: false });

app.get('/',function(req,res){
    res.render("form");
});

app.get("/responses", async (req, res, next) => {
    try {
        Responses.find({}, function(err, allResp){
            if(err){
                console.log(err);
            } else {
                res.render("responses",{msg: "Responses will be shown here soon!", allResp : allResp})
            }
        });
    } catch (err) {
      next(err);
    }
});

app.get('/login',function(req, res){
    res.send("This can be made a login route!")
});

app.get('/register',function(req, res){
    res.send("This can be made a user registration route!")
});

app.post("/", async (req, res, next) => {
    try {
        Responses.create(req.body,function(err,newResponse){
            if(err){
                res.send(err);
            } else {
                res.redirect("/");
            }
        });
    } catch (err) {
      next(err);
    }
});

app.delete("/responses/:id", async (req, res, next) => {
    try {
        Responses.findByIdAndRemove(req.params.id, function(err, foundPost){
            if(err){
                res.send(err);
            } else {
                res.redirect("/responses");
            }
        });
    } catch (err) {
      next(err);
    }
});

const port = process.env.PORT || 3000 ;
app.listen(port,function(){
    console.log("Server Started!!");
});