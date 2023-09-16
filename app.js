const express = require('express');
const app = express();
const mysql = require('mysql');

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/',require('./router'));

app.listen(5000, () => {
    console.log("Server is running on port 5000 http://localhost:5000/");
});
