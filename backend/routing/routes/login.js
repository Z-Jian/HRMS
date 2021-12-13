const router = require('express').Router({strict: true});
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('dotenv').config('../.env');


router.post('/login', (req, res) =>{
    // to-do

})

router.get('/login', (req, res) =>{
    // to-do
    res.send('login')
})

module.exports.ROUTER_LOGIN = router