const { ROUTER_CALENDAR } = require("./routes/calendar");
const { ROUTER_CLAIMS } = require("./routes/claims");
const { ROUTER_LEAVES } = require("./routes/leaves");
const { ROUTER_LOGIN } = require("./routes/login");
const { ROUTER_REGISTER } = require("./routes/register");
const errorHandler = require("./routes/error").errorHandler;
const { ROUTER_HTTP } = require("./middlewares/http");
const { ROUTER_SET_VIEW } = require("./middlewares/view");
const login = require('./middlewares/static').FRONTEND.VIEWS.LOGIN

function ROUTING_INIT(app){
    ROUTER_SET_VIEW(app);
    app.use(ROUTER_HTTP);

    app.use("/login", ROUTER_LOGIN);
    app.use("/leaves", ROUTER_LEAVES);
    app.use("/claims", ROUTER_CLAIMS);
    app.use("/calendar", ROUTER_CALENDAR);
    app.use("/register", ROUTER_REGISTER);

    // app.use(errorHandler);
    
    app.get('/', function(req, res){
        res.render(login)
    })
    

}

module.exports = ROUTING_INIT;