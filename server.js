const express = require("express");

const bodyParser = require("body-parser");

const dataConnection = require("./config/db.js");

dataConnection();


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const main = require("./routes/index.js");

app.use(express.json());

app.use('/', main);

// const port = process.env.PORT || 8000;

app.listen(8000, () => {
    console.log("Server is up and running")
})



