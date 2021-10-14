const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');


const app = express();


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
})

app.get("/colleges",function(req,res){
  res.sendFile(__dirname+"/colleges.html");
})

app.get("/review",function(req,res){
  res.sendFile(__dirname+"/review.html");
})
// mongoose.connect("mongodb://localhost:27017/reviewDB",{useNewUrlParser:true});


// const reviewSchema = {
//   name:String,
//   review:String
// }

// const Review = mongoose.model("Review","reviewSchema");

// const review1 = new Review({
//   name:"sunil",
//   message:"super"
// })
// const review1 = new Review({
//   name:"anil",
//   message:"duper"
// })
// const review1 = new Review({
//   name:"shahil",
//   message:"buper"
// })

// app.post("/",function(req,res){
 
//   let name = req.body.name;
//   let message = req.body.message;

//   res.send("Hii thanku for reviewing "+ "name "+ name + "  review "+ message);
// })
app.listen(process.env.PORT || 3000, function(){
  console.log("server started at port 3000")
})











// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/reviewsDB');
// }

// const reviewSchema= new mongoose.Schema({
//     name:String,
//     email:String,
//     reviewp:String
// });

// const Review = mongoose.model("Review",reviewSchema);

// const review = new Review({
//     name: "Sunil Kumar",
//     email:"sunilachra121@gmail.com",
//     reviewp:"sdfhldkfzkv"
// }) 
