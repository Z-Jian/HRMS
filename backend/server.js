const express = require('express');
const dotenv = require('dotenv');
const DATABASE_INIT = require('./database/database');
const ROUTING_INIT = require('./routing/routing');


function app_init(){

    // Configure environment variables
    dotenv.config('./.env')
    const port = process.env.PORT || 3000;
    const url = process.env.DATABASE_URL

    const app = express();

    ROUTING_INIT(app);
    DATABASE_INIT(url);

    app.listen(port, () => {
        console.log(`server starting on http://localhost:${port}`);
    });

    return app
}


const app = app_init();