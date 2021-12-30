const express = require('express');
const router = require('express').Router({strict: true});
const helmet = require('helmet');


// HTTP Headers
router.use(helmet());
// HTTP request body for parsing application/json or x-www-form-urlencoded
router.use(express.json());
router.use(express.urlencoded({
    extended: false
}));

module.exports.ROUTER_HTTP = router