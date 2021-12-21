const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../database/models/user')


function authCredential (req, res, next ) {}

function issueToken (req, res, next) {}

function hasToken (req, res, next) {}

function extendSession (req, res, next) {}

function isSessionExpired (req, res, next) {}


module.exports.AUTH_LOGIN = {authCredential, issueToken}

module.exports = {extendSession, isSessionExpired, hasToken}