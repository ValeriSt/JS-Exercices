import express from "express";
var app = express();
var port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Home Page<h1>");
})
app.get("/contact", (req, res) => {
    res.send("<h1>Contact me<h1>");
})
app.get("/about", (req, res) => {
    res.send("<h1>About Page<h1>");
})
app.listen(port, () =>{
    console.log(`Server is running at ${port}`);
})