const moogoose = require('mongoose');

async function DATABASE_INIT(url){
    try {
        await moogoose.connect(url,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('database is connected')
    
    } catch (err) {
        console.log(err)
    }
}

module.exports = DATABASE_INIT;