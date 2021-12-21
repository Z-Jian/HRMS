const router = require('express').Router({strict: true});
const login = require('../../api/auth').AUTH_LOGIN

router.get("/", login);

module.exports.ROUTER_LOGIN = router