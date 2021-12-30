const router = require('express').Router({strict: true});
const login = require('../../api/auth').AUTH_LOGIN

router.post("/", login);

// function login (req, res, next){

//     User.find({ 
//         email: req.body.email,
//         email: req.body.password
//     }, function (err, data) {
//         if (err) next(err);

//         if (data.length > 0) req.loginResult = true;
//         else req.loginResult = false;

//         return next();    
//     })

// }


// function getToken(user, key){
//     return jwt.sign(user, key, {
//         expiresIn: "1h"
//     });
// }

// router.get('/index', authenticateToken, (req, res) => {
//     res.json(req.user.name)
// })

// router.post('/', (req, res) =>{
//     // to-do
//     const username = req.body.email;
//     const password = req.body.password;

//     const user = {name: username};

//     const accessToken = getToken(user, process.env.ACCESS_TOKEN_SECRET);

//     res.json({accessToken: accessToken})

// })

// function authenticateToken(req, res, next){
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1]
//     if (token == null) return res.sendStatus(401)

//     jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
//         if (err) return res.sendStatus(403)
//         req.user = user
//         next()
//     })
// }

// router.get('/login', (req, res) =>{
//     // to-do
//     res.send('login')
// })

module.exports.ROUTER_LOGIN = router