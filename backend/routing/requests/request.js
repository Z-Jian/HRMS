const helmet = require('helmet');


function req_init(app){

    // HTTP Headers
    app.use(helmet());
    // HTTP request body for parsing application/json or x-www-form-urlencoded
    app.use(express.json())
    app.use(express.urlencoded({
        extended: false
    }))
}