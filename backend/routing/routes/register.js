const router = require('express').Router({
    strict: true
});
const moogoose = require('mongoose');
const User = require('../../database/models/user')

const result = {
    success: false,
    details: null
}

async function isEmailExist(req, res, next) {

    req.validataResult = result;

    User.find({ 
        email: req.body.email 
    }, function (err, data) {
        if (err) next(err);

        req.validataResult.details = req.body.email;

        if (data.length == 0) req.validataResult.success = true;
        else req.validataResult.success = false;

        return next();    
    })

};

async function createAcc(req, res, next) {

    if (req.validataResult.success == true){
        const user = new User({
            _id: new moogoose.Types.ObjectId(),
            email: req.body.email,
            password: req.body.password,
            fullName: req.body.fullName
        })
        req.createResult = result
        user.save()
            .then(data => {
                req.createResult.details = data;
                req.createResult.success = true;
                res.json(req.createResult);
            }).catch(err => {
                next(err);
            })
    }

};

router.post('/', isEmailExist, createAcc)

module.exports.ROUTER_REGISTER = router