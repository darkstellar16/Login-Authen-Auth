const express = require("express");

const route = express.Router();

const register = require("../routes/register/register.js");


const login = require("../routes/login/login.js");

const welcomeData = require("../routes/welcome/welcome.js");


route.use('/register', register);
route.use('/login', login);
route.use('/welcome', welcomeData);


module.exports = route;