//Import express elements
const express = require("express");

//express method
const app = express();

/////// start ASSETS
app.use(express.static("public"));
/////// end ASSETS

////// start ROUTES (Get and Post)
//GET home.html {
app.get("", (req, res, next) => {
  res.sendFile(__dirname + "/views/home.html");
});

//GET about.html
app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/views/about.html");
});

//GET works.html
app.get("/works", (req, res, next) => {
  res.sendFile(__dirname + "/views/works.html");
});

//GET photoGallery.html
app.get("/photo_gallery", (req, res, next) => {
  res.sendFile(__dirname + "/views/photoGallery.html");
});
////// end ROUTES

///// turn on SERVER
app.listen(3000, () => {
  console.log("estoy corriendo en el puerto 3000");
});
