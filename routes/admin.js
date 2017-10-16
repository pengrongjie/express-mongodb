var express = require('express');
var router = express.Router();
var Model = require('../data/module');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var user = req.session.user;
  if(user && user.username){
    Model.Article.find({}, function(err, docs){
      if(err){
        console.log(err);
        return;
      }else{
        res.render('admin',{user: user, items: docs});
        return;
      }
    })
  }else{
    res.redirect('/login');
    return;
  }
});

module.exports = router;
