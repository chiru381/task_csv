
const mongoose = require("mongoose");


const DB = 'mongodb://127.0.0.1:27017/csv';

mongoose.connect(DB).then(()=>{
    console.log('Connection successful!');
}).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to DB"));

db.once("open", () => {
    console.log("Successfully connected to DB");
});

module.exports = db;