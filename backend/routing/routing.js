const { ROUTER_CALENDAR } = require("./routes/calendar");
const { ROUTER_CLAIMS } = require("./routes/claims");
const { ROUTER_LEAVES } = require("./routes/leaves");
const { ROUTER_LOGIN } = require("./routes/login");
const express = require('express');
const helmet = require('helmet');
const { ROUTER_REGISTER } = require("./routes/register");
const errorHandler = require("./routes/error").errorHandler;

function ROUTING_INIT(app){

    // HTTP Headers
    app.use(helmet());
    // HTTP request body for parsing application/json or x-www-form-urlencoded
    app.use(express.json());
    app.use(express.urlencoded({
        extended: false
    }));

    app.use("/login", ROUTER_LOGIN);
    app.use("/leaves", ROUTER_LEAVES);
    app.use("/claims", ROUTER_CLAIMS);
    app.use("/calendar", ROUTER_CALENDAR);
    app.use("/register", ROUTER_REGISTER);

    // app.use(errorHandler);
    
    app.get('/', function(req, res){
        res.send('Welcome to HRMS')
    })
    

}

module.exports = ROUTING_INIT;