const express = require('express');
const dotenv = require('dotenv');
const DATABASE_INIT_CONNECTION = require('./database/database');
const ROUTING_INIT = require('./routing/routing');


// Configure environment variables
dotenv.config('./.env')
const port = process.env.PORT || 3000;
const url = process.env.DATABASE_URL

const app = express();


ROUTING_INIT(app);
DATABASE_INIT_CONNECTION(url);

app.listen(port, () => {
    console.log(`server starting on http://localhost:${port}`);
});
