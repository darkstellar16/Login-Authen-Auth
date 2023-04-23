const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const  mongo_url  = "mongodb+srv://shubham:shubh@cluster0.oraafuo.mongodb.net/?retryWrites=true&w=majority";

// console.log(mongo_url);
const connection = async () => {

    try {
        mongoose.connect(mongo_url, { useNewUrlParser: true })
        console.log("Data base Connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection;