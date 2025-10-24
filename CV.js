const express = require("express");
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

app.get("/",function(req,res){
    res.render("CV");
    
})

app.listen(3000);
