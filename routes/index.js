var express = require('express');
var router = express.Router();
var Model = require('../data/module');

/* GET home page. */
router.get('/', function(req, res, next) {


  Model.Article.find({}, function(err, docs){
    var user = req.session.user;
    if(err){
      console.log(err);
      return;
    }else{
      res.render('index', { title: 'Express',user: user, items: docs.reverse() });
    }
  })
});

module.exports = router;
