const express = require("express");

const route = express.Router();

const register = require("../routes/register/register.js");


const login = require("../routes/login/login.js");


route.use('/register', register);
route.use('/login', login);


module.exports = route;