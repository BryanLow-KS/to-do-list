const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); //local module
//when require, it will run the code in the module
//require, binds all the exports of the module to the constant date

const app = express();

 const items = ["Buy food", "Cook food", "Eat food"];
//the list starts off with these 3
 const workItems = [];
 //in javascript, we can still push items into const arrays

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
//setting view engine to ejs
//ejs template files are inside the views folder

app.use(express.static("public"));
//providing the location of all static files

app.get("/", function(req, res) {

  const day = date.getDate();
  //date = module.exports
  //has access to two properties, getDate and getDay, according to module

  res.render("list", {listTitle: day, newListItems: items});
  //assigning the variable in marker(<%= kindOfDay %>) in list.ejs with value of day
  //rendering list.ejs file to webpage, thats is inside views folder
  //do all the processing first, then pass the result to the template file
  //when render an ejs file, must provide all marker variables that it contains

  // kindOfDay and newListItems(array) are marker variables inside ejs file
  // day and items are passed from server to list.ejs to assign values to the marker variables
})

app.post("/", function(req,res){
  const item = req.body.newItem;
  //newItem is the input

  if (req.body.list === "Work List"){
    // list is the button name
    //checking if the value of the button is from the work list
    workItems.push(item);
    res.redirect("/work"); //send get req to /work , then updates list

  } else {
    items.push(item);


res.redirect("/");
//this sends get request to / , app.get /
//redirect to the home route
//then pass in new marker variables, with the updated newListItems array,
//therefore rendering new list items on the webpage
//basically to update the page with new list elements
  }


})


app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
})

app.post("/work", function(req,res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
  //basically update and refresh the page
})

app.get("/about", function(req,res){
  res.render("about");
})


app.listen(3000, function() {
  console.log("Server is running on port 3000");
})
