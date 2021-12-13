const router = require('express').Router({strict: true});



router.get('/calendar', (req, res) =>{
    // to-do
    res.send('calendar')
})


module.exports.ROUTER_CALENDAR = router