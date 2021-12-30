const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../database/models/user')
const findOne = require('./queries').findOne
const httpError = require('http-error')
const index = require('../routing/middlewares/static').FRONTEND.VIEWS.INDEX

passport.use('login', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async function (req, email, password, done) {
    
    const conditions = {
        email: email.toLowerCase()
    }
    await findOne(User, conditions).then((result) => {
        if (result.success == false) { return done(null, false); }
        if (!result.details) { return done(null, false); }
        if (!result.details.isValidPassword(password)) { return done(null, false); }
        return done(null, true)
    }).catch((error) => {
        if (err) { return done(error); }    
    })

}

));


async function authCredential (req, res, next ) {
    await passport.authenticate('login', function(err, user)  {
        if (err) next(err)
        if (!user) {  return res.json("Not authorized") }
        else { req.authResult = user }
        return next();
    })(req, res, next);
};

async function issueToken (req, res, next) {
    const payload = {
        id: req.authResult.id,
        name: req.authResult.fullName,
        role: req.authResult.role,
    }
    const secret = process.env.ACCESS_TOKEN_SECRET
    const options = {
        expiresIn: '24h'
    }
    const token = jwt.sign(payload, secret, options)
    res.render(index, {
        token: token
    })
    // next()
}

function hasToken (req, res, next) {}

function extendSession (req, res, next) {}

function isSessionExpired (req, res, next) {}

module.exports.AUTH_LOGIN = [authCredential, issueToken]

// module.exports = {extendSession, isSessionExpired, hasToken}