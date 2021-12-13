const { ROUTER_CALENDAR } = require("./routes/calendar");
const { ROUTER_CLAIMS } = require("./routes/claims");
const { ROUTER_LEAVES } = require("./routes/leaves");
const { ROUTER_LOGIN } = require("./routes/login");

function ROUTING_INIT(app){

    app.use(ROUTER_LOGIN);
    app.use(ROUTER_LEAVES);
    app.use(ROUTER_CLAIMS);
    app.use(ROUTER_CALENDAR);
    
    app.get('/', function(req, res){
        res.send('Welcome to HRMS')
    })
    

}

module.exports = ROUTING_INIT;