const User = require('../models/User')
const {multipleMongooseToObject} = require('../../utils/mongoose')

class MeController{
    index(req,res){
        res.render('me/myProfile')
    }


    myFriends(req,res, next){
        User.find({})
        .then((users) => {
          res.render("me/myFriends", {
            users: multipleMongooseToObject(users),
          });
        })
        .catch(next);
    }
}

module.exports = new MeController