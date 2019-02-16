var express = require("express");
var app = express();

app.set("view engine","ejs");  // no ned to add ejs every time.
app.use(express.static("public"));  // for style sheet

app.get("/",function(req,res){
   res.render("index"); 
});
// signup page
app.get("/signup",function(req,res){
   res.render("signup");
});
// our cites
app.get("/contacts",function(req,res){
   res.render("contacts");
});
// our cites
app.get("/cites",function(req,res){
   res.render("our_city.ejs");
});

// our services
app.get("/services",function(req,res){
   res.render("services");
});

// delievery
app.get("/delievery",function(req,res){
   res.render("delievery");
});

// about
app.get("/about",function(req,res){
   res.render("about");
});



app.listen(process.env.PORT,process.env.IP,function(){
   console.log("TBS server is on"); 
});