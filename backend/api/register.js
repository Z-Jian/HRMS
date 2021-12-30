const moogoose = require('mongoose')
const User = require('../database/models/user')
const Queries = require('../api/queries')
const Result = require('../objects/result').Result
const bcryot = require('bcrypt')

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
    if (req.validataResult.success == true && !req.validataResult.details){
        const hashedPsw = await bcryot.hash(req.body.password, 10)
        const user = new User({
            _id: new moogoose.Types.ObjectId(),
            email: req.body.email,
            password: hashedPsw,
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