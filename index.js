const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const port = 8000;
const app = express();

const csv = require('csv-parser');
const db = require("./config/mongoose");

app.use(expressLayouts);

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('./assets'));    

app.set("view engine", "ejs");
app.set("views", "./views");

app.use('/', require('./routes'));

app.listen(port,  (err) => {
    if(err) {
        console.log('Error', err);
        return;
    }
    console.log('Server is up and running on port: ', port);

});