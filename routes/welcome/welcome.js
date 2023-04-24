const express = require("express");

const route = express.Router();

const welcomeData = require("../../controller/welcome/welcome.js");

const auth = require("../../middleware/auth.js");


route.get("/", auth, welcomeData);

module.exports = route;