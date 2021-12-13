const router = require('express').Router({strict: true});



router.get('/leaves', (req, res) =>{
    // to-do
    res.send('leaves')
})


module.exports.ROUTER_LEAVES = router