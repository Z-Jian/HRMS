const router = require('express').Router({
    strict: true
});
const registerAccount = require('../../api/register').API_REGISTER


router.post('/', registerAccount)

module.exports.ROUTER_REGISTER = router