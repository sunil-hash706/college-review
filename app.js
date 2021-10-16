const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin-sunil:CodeKni8z@cluster0.z0shg.mongodb.net/ReviewDB');
}

const reviewSchema = new mongoose.Schema({
  name: String,
  review: String,
  year: Number,
  collegeType: String,
  collegeName:String
});

const Review = mongoose.model('Review', reviewSchema);

app.post("/review",function(req,res){
   var nu= req.body.name;
   var ct = req.body.colleges;
   var cn = req.body.clgname;
   var yr = req.body.year;
   var rw = req.body.review;


   console.log(nu + " " + rw +" " + yr +" " + ct +" " +cn);

   const review1 = new Review({
    name: nu,
    review:rw,
    year:yr,
    collegeType:ct,
    collegeName:cn
    });
 
 review1.save();

 res.send("your review successfully accepted keep reviewing keep helping");
})






app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
})

app.get("/iitm",function(req,res){
  res.sendFile(__dirname+"/colleges2.html");
})

app.get("/colleges",function(req,res){
  res.sendFile(__dirname+"/colleges.html");
})




app.get("/review",function(req,res){
  res.sendFile(__dirname+"/review.html");
})

app.get("/about",function(req,res){
  res.sendFile(__dirname+"/about.html");
})



app.listen(process.env.PORT || 3000, function(){
  console.log("server started at port 3000")
})







