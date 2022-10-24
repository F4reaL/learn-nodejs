const User = require('../models/User')
const {multipleMongooseToObject} = require('../../utils/mongoose')

class CommonSiteController{
    home(req,res, next){
        res.render('home')
    }
}

module.exports = new CommonSiteController