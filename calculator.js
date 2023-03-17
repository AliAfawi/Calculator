const express = require("express");
const app = express();
var bodyParser = require("body-parser")


app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.use(bodyParser.urlencoded({extended: true}));

app.post("/",function(req,res){
  var num1= Number(req.body.num1);
  var num2= Number(req.body.num2);

  var resule = add(num1,num2);

  res.send("Thanks for unsing my Calculator: " + resule);
});


function add(x,y){
  return x+y;
}

app.listen(3000,function(){
  console.log("Enter to 3000!");
});


app.get("/bmiCalculator",function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator",function(req,res){
  var weight = parseFloat(req.body.weight);
  var height= parseFloat(req.body.height);
  var result1 =weight/( height * height);

  res.send("Your BMI is: " + result1);
})
