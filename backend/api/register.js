const moogoose = require('mongoose')
const User = require('../database/models/user')
const Queries = require('../api/queries')
const Result = require('../objects/result').Result

async function isEmailExist(req, res, next) {

    const conditions = {
        email: req.body.email
    }
    await Queries.findOne(User, conditions).then((result) => {
        req.validataResult = JSON.parse(JSON.stringify(result))
    }).catch((error) => {
        console.log("Here ",error)
    })
    return next()
};

async function createAcc(req, res, next) {
    if (req.validataResult.success == true){
        const user = new User({
            _id: new moogoose.Types.ObjectId(),
            email: req.body.email,
            password: req.body.password,
            fullName: req.body.fullName
        })

        await Queries.insertOne(user).then( (result) => {
            res.json(result)
        }).catch( (error) => {
            next(error);
        })
    }
    else {
        res.json(req.validataResult)

    }
};

module.exports.API_REGISTER = [isEmailExist, createAcc]