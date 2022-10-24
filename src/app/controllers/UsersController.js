const User = require("../models/User");
const { multipleMongooseToObject, mongooseToObject } = require("../../utils/mongoose");

class UsersController {
  index(req, res, next) {
    //// Điều kiện tìm kiếm
    let condition = {}

    //Callback
    // User.find(condition, (err, users)=>{
    //     if(err) res.status(400).json({error: 'Message Error !!'})
    //     res.json(users)
    // })

    //Promise
    User.find(condition)
      .then((users) => {
        res.render("users/users", {
          users: multipleMongooseToObject(users),
        });
      })
      .catch(next);
  }

  //GET a User Detail
  show(req,res,next){
    let condition = {slug: req.params.slug}
    User.findOne(condition)
      .then((user) => {
        res.render("users/show", {
          user: mongooseToObject(user),
        });

      })
      .catch(next);
  }

  create(req,res, next){
    res.render('users/create')
  }
  edit(req,res, next){
    User.findById(req.params._id)
      .then((user) => {
        res.render("users/edit", {
          user: mongooseToObject(user),
        });
      })
      .catch(next);
  }

  //create new user
  store(req,res){
    const user = new User(req.body)
    user.save()
    res.send('Success !!')
  }

  update(req,res, next){
    User.updateOne({_id: req.params._id}, req.body)
    .then(()=> res.redirect('/me/my-friends'))
    .catch(next)
  }
}

module.exports = new UsersController();
