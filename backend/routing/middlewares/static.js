const path = require('path')

const FRONTEND_ABS= path.join(__dirname, '../../../frontend') ,

FRONTEND = {
    VIEWS: {
        LOGIN: path.join(FRONTEND_ABS, 'views/login'),
        INDEX: path.join(FRONTEND_ABS, 'views/index'),
    
    }
}


module.exports = {FRONTEND}