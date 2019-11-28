var express=require("express");
var routeEmployee=require("./routes/employee");

//var bodyParser=require("body-parser");

var app=express();
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//app.use(bodyParser.json());
app.use("/employee",routeEmployee);
app.get("/",(Request,Response)=>{
  Response.send("Welcome to my backend");

})

app.listen(9001,'0.0.0.0',()=>{
    console.log("Server started on port 9898");
})